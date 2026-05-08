# Working in this repo (notes for Claude)

This is the `lution-website` public repo — Next.js marketing site and app platform for `lutiontech.com`.

**Full internal context** (architecture, rollout plan, ops notes, progress) lives in the private `lution-architecture` repo at `c:\repo\lutiontech\lution-architecture\lution-website\`. Read that first when resuming work.

## Quick conventions

- No secrets in this repo — `.env.example` documents keys; real values go in Vercel project env vars
- Subdomains for apps (`habits.lutiontech.com`), not paths
- PRs get Vercel preview URLs — use them, don't test prod-only behavior on `main`
- App Router only — no `pages/` directory
