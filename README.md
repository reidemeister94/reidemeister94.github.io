# reidemeister94.github.io

Personal portfolio of **Silvio Pavanetto** — built with [Astro](https://astro.build),
deployed to GitHub Pages.

**Live:** https://reidemeister94.github.io

## Editing content

All content lives in **one file**: [`src/data/content.ts`](src/data/content.ts).
Edit your bio, stats, experience, projects, skills, publications and education
there — the components read from it. No need to touch markup for routine updates.

- **CV:** replace [`public/cv.pdf`](public/cv.pdf) with your latest resume (keep the name).
- **Publications:** add the `url` field to each entry to make the title link out.

## Develop locally

```bash
npm install        # first time
npm run dev        # http://localhost:4321
npm run build      # production build into ./dist
npm run preview    # preview the production build
```

> Note: if `npm install` fails with an `EACCES` cache error, run it once with a
> clean cache: `npm install --cache /tmp/npm-cache` (a one-off local quirk, not
> needed in CI).

## Deploying

Deployment is **automatic via GitHub Actions**: every push to `main` builds the
site and publishes it to GitHub Pages. No manual step — just:

```bash
git push
```

Watch the run under the repo's **Actions** tab, or trigger one by hand there with
**Run workflow**. The pipeline lives in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and uses the official
`withastro/action` (build) + `actions/deploy-pages` (publish).

**GitHub setting** (already configured): **Settings → Pages → Build and deployment
→ Source: GitHub Actions**.

> `public/.nojekyll` is intentionally included so Pages serves Astro's `_astro/`
> asset folder (Jekyll would otherwise ignore underscore-prefixed paths).

## Custom domain (optional, later)

When you own a domain and want to use it:

1. Add a file `public/CNAME` containing just the domain (e.g. `example.com`).
2. Change `site` in [`astro.config.mjs`](astro.config.mjs) to `https://example.com`.
3. Point the domain's DNS to GitHub Pages and set it under **Settings → Pages**.

## Stack

- [Astro](https://astro.build) — static site generator
- [Geist + Geist Mono](https://vercel.com/font) — self-hosted via Fontsource
- Vanilla CSS (scoped per component, theme via CSS custom properties)
- Light/dark theme, `prefers-reduced-motion`-aware motion, no tracking
