# Harshitha P. M. — Portfolio

A responsive personal portfolio for an AI & Data Science student at NMIT. The implementation follows `spec.md` in phases so the application stays reviewable as it grows.

## Current phase

**Phase 1 — project initialization.** This repository currently contains a React/Vite frontend foundation, initial academic hero content, a Vercel Node.js health function, lint configuration, and environment-variable placeholders. The remaining portfolio sections and contact/database behavior are planned for later phases. No projects, work history, social accounts, résumé, or credentials have been fabricated.

## Stack and deployment shape

- React and Vite build the static frontend into `dist/`.
- Vercel serves the frontend assets and maps `api/health.js` to `/api/health` as a Node.js Function.
- Future API endpoints belong under `api/`; MongoDB credentials stay in server-side environment variables.
- The health function uses the standard Fetch `Request`/`Response` interface supported by Vercel's Node.js runtime.

The frontend is a single-page page with section anchors, so no client-side route fallback is needed yet. When client-side routes are introduced, configure a Vercel SPA fallback that leaves `/api/*` requests available to functions.

## Requirements

- Node.js 20 or newer
- npm 10 or newer
- A Vercel account only for deployment

Node.js and npm were not available in the environment where this scaffold was created, so installation and build commands have not yet been run.

## Local setup

```sh
npm install
Copy-Item .env.example .env
npm run dev
```

Vite serves the frontend locally. The Vercel API function is deployed at `/api/health`; to run Vercel Functions locally, install the Vercel CLI and use `vercel dev` after linking a Vercel project.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite development server |
| `npm run build` | Create the production frontend in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the JavaScript and JSX files |

No automated tests are configured yet; they will be added with the phases that implement testable features.

## Environment

`.env.example` documents the future server-only MongoDB variables. Copy it to `.env` for local development and set real credentials only in local ignored files or Vercel project settings. Never add secrets to a `VITE_*` variable or commit `.env`.

## Updating content

Personal content should be centralized in a profile configuration module when the static portfolio sections are implemented. Keep projects in a dedicated data module until there is a real need for database-backed project editing. Add a résumé only after a real PDF is supplied, and expose social links only after their destinations are known.

## Vercel deployment

1. Push this repository to a Git provider and import it into Vercel.
2. Use the repository root as the project root and Vite as the framework preset (or allow framework detection).
3. Use `npm run build` as the build command and `dist` as the output directory if Vercel does not detect them automatically.
4. Add server environment variables in Vercel project settings when the MongoDB phase is implemented.
5. Deploy a preview and verify the homepage and `/api/health` before production.

The production database and contact endpoint are not configured in this phase. Do not report contact persistence or a production deployment as working until those phases have been completed and verified.

## Troubleshooting

- If `node` or `npm` is not recognized, install Node.js 20+ and reopen the terminal.
- If Vite dependencies are missing, run `npm install` from the repository root.
- If `/api/health` is unavailable under Vite's dev server, run the project with `vercel dev`; Vite does not execute Vercel Functions itself.

## Custom domain

Add a domain in the Vercel project settings after deployment, then follow Vercel's DNS instructions and verify HTTPS and the canonical hostname.
