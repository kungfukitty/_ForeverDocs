import { cfg } from '../config';

export async function api(path, opts = {}) {
  const url = `${cfg.apiBase}${path.startsWith('/') ? '' : '/'}${path}`;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    ...opts,
  });
  if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`);
  return res.json();
}
