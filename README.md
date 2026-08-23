# Olalemi Olaoluwakintan Emmanuel — Portfolio

A React + Tailwind CSS portfolio site (Vite-powered), themed around a RAN/signal-monitoring
aesthetic to match Olalemi's telecom + data science background.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Vite — no config needed. Build command: `npm run build`,
   output directory: `dist`.
4. Click **Deploy**.

Or from the CLI:

```bash
npm install -g vercel
vercel
```

## Editing content

All personal content (skills, projects, experience, certifications, stats) lives in
`src/data.js` — edit the arrays there, no need to touch the component markup in `src/App.jsx`.

To update skill percentages, change the `level` value (0–100) on any skill entry.
To add a project, add a new object to the `projects` array with `repo` and optional `demo` links.
