# ForeverDocs — Connected Landing (Vite + Tailwind)

- SPA rewrites for Vercel & Render
- `/api/*` proxy to backend on Vercel (see `vercel.json`)
- `VITE_API_URL` support for direct API calls (Render Static)

## Build
```bash
npm i
npm run build
```

## Dev
```bash
npm run dev
```

## API Quickstart
```bash
cd server
cp .env.example .env
# set ALLOWED_ORIGINS to your web origin(s)
npm i
npm start
# API on http://localhost:3000
```

## Frontend Quickstart
```bash
npm i
npm run dev
# set VITE_API_URL=http://localhost:3000 in .env.local if needed
```

## Deploy
**Render:** uses `render.yaml` (static site + node api). After deploy, set `ALLOWED_ORIGINS` on the API to your static site URL.

**Vercel:** the provided `vercel.json` proxies `/api/*` to your Render API service.
