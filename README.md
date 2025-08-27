# ForeverDocs Frontend

Production-ready Vite + React + Tailwind app with:
- Global header/footer navigation on **every page**
- Mobile-friendly hamburger nav
- Routes for Home, Press, Impact, Sponsor, Ambassador, Waitlist, Privacy, Terms, Demo Crest, 404
- Working forms: **Waitlist**, **Sponsor**, **Ambassador** posting to `${VITE_API_URL || '/api'}`
- SPA rewrites for Vercel (no custom builds section)

## Install & Run
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy on Vercel
- Add `VITE_API_URL` env var (e.g. `https://your-server.com/api`).
- `vercel.json` already includes SPA rewrite.

## Notes
- Forms POST to `${VITE_API_URL || '/api'}` with JSON payloads.
- UTM parameters in the URL are captured and stored locally to include with waitlist submissions.
- No mocks or stubs included. All pages have complete copy and navigation.
