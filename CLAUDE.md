# aidencullo.com

Personal website built with React + TypeScript + Vite, deployed to GitHub Pages at aidencullo.com.

## Stack
- React 19, TypeScript, Vite
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- Branches: `dev` (develop here) → `prod` (production, deploys via manual GitHub Actions trigger)
- Deploy: GitHub Actions → "Promote dev to prod" workflow_dispatch

## Key Components
- `src/components/VisitorFootprint/VisitorFootprint.tsx` — detects visitor location via IP geolocation and shows local weather
