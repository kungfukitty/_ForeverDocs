import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { getDb, initDb } from './lib/db.js';
import { sendAdminEmail } from './lib/mailer.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Security & middleware
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('combined'));

// CORS
const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
app.use(cors({
  origin(origin, cb) {
    if (!origin) return cb(null, true); // allow curl/postman
    if (allowed.length === 0 || allowed.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS: ' + origin));
  },
  methods: ['GET','POST','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
}));

// Rate limit
app.use(rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 200,
  standardHeaders: true,
  legacyHeaders: false
}));

// DB
await initDb();

// Schemas
const emailSchema = z.object({ email: z.string().email().max(255) });
const ambassadorSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(255),
  region: z.string().min(2).max(120),
  socials: z.string().optional().default(''),
  skills: z.string().optional().default('')
});
const sponsorSchema = z.object({
  org: z.string().min(2).max(180),
  contact: z.string().min(2).max(120),
  email: z.string().email().max(255),
  website: z.string().url().optional().or(z.literal('')).default(''),
  tier: z.enum(['community','growth','flagship']).default('community'),
  budget: z.string().optional().default(''),
  notes: z.string().optional().default('')
});

// Helper
async function handleInsert(type, data, res) {
  try {
    const db = await getDb();
    const row = await db.insertSubmission(type, data);
    sendAdminEmail(type, data).catch((err) => {
      console.error(`[mailer] Failed to send admin email for ${type}:`, err);
    });
    res.status(201).json({ ok: true, id: row.id });
  } catch (e) {
    console.error(`[db] Error inserting submission for type ${type}:`, e);
    res.status(500).json({ ok:false, error:'internal_error' });
  }
}

// Routes (support both / and /api prefixes)
app.get(['/health','/api/health'], (_req, res) => res.json({ ok: true, time: new Date().toISOString() }));

app.post(['/waitlist','/api/waitlist'], async (req, res) => {
  const parsed = emailSchema.safeParse(req.body || {});
  if (!parsed.success) return res.status(400).json({ ok:false, error: parsed.error.issues });
  await handleInsert('waitlist', parsed.data, res);
});

app.post(['/ambassador','/api/ambassador'], async (req, res) => {
  const parsed = ambassadorSchema.safeParse(req.body || {});
  if (!parsed.success) return res.status(400).json({ ok:false, error: parsed.error.issues });
  await handleInsert('ambassador', parsed.data, res);
});

app.post(['/sponsor','/api/sponsor'], async (req, res) => {
  const parsed = sponsorSchema.safeParse(req.body || {});
  if (!parsed.success) return res.status(400).json({ ok:false, error: parsed.error.issues });
  await handleInsert('sponsor', parsed.data, res);
});

// 404
app.use((_req, res) => res.status(404).json({ ok:false, error:'not_found' }));

app.listen(PORT, () => console.log(`[api] listening on :${PORT}`));
