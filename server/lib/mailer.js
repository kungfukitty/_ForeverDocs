import nodemailer from 'nodemailer';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
let transporter = null;

if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && SMTP_FROM) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
  transporter.verify().then(() => console.log('[mail] ready')).catch(()=>{});
}

export async function sendAdminEmail(type, data) {
  if (!transporter) return;
  const html = `
    <h2>New ${type} submission</h2>
    <pre style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; background:#f6f6f6; padding:12px; border-radius:8px;">${escapeHtml(JSON.stringify(data, null, 2))}</pre>
  `;
  await transporter.sendMail({
    from: SMTP_FROM,
    to: SMTP_FROM,
    subject: `ForeverDocs — ${type} submission`,
    html
  });
}

function escapeHtml(s='') {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}
