# Vandana — Portfolio

React.js developer portfolio. Built with Vite + React + TypeScript + Tailwind + Framer Motion.

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

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the repo at https://vercel.com/new — framework is auto-detected as Vite.
3. Build command: `npm run build` · Output: `dist`.

## Replace before launch

- `public/resume.pdf` — your latest resume (route: `/resume.pdf`).
- `public/og-image.png` — 1200×630 share image.
- Project links in `src/data/projects.ts` — add live demo URLs and screenshots.
- Headshot — drop into `public/avatar.jpg` and wire into `About.tsx` if you want one.

## Structure

```
src/
├─ components/   Nav, ScrollProgress, CursorDot, Reveal, ui/
├─ sections/     Hero, About, Stats, Experience, Work, Skills, Education, Contact, Footer
├─ data/         profile, experience, projects, skills, stats, education
└─ hooks/        useReducedMotion
```

Editing copy: every section reads from `src/data/*.ts`. Edit there, not in components.
