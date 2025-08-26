import pkg from 'pg';
const { Pool } = pkg;

let pool = null;
let memory = null;

async function ensureTables(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS submissions (
      id BIGSERIAL PRIMARY KEY,
      type TEXT NOT NULL,
      payload JSONB NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
}

export async function initDb() {
  const url = process.env.DATABASE_URL;
  if (url) {
    pool = new Pool({ connectionString: url, max: 4 });
    const client = await pool.connect();
    try {
      await ensureTables(client);
      console.log('[db] postgres ready');
    } finally {
      client.release();
    }
  } else {
    memory = { seq: 1, submissions: [] };
    console.warn('[db] No DATABASE_URL; using in-memory store (non-persistent).');
  }
}

export async function getDb() {
  if (pool) {
    return {
      async insertSubmission(type, payload) {
        const r = await pool.query('INSERT INTO submissions (type, payload) VALUES ($1,$2) RETURNING id', [type, payload]);
        return { id: r.rows[0].id };
      }
    }
  }
  return {
    async insertSubmission(type, payload) {
      const id = memory.seq++;
      memory.submissions.push({ id, type, payload, created_at: new Date().toISOString() });
      return { id };
    }
  }
}
