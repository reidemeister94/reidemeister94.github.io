---
paths:
  - "src/**"
  - "astro.config.mjs"
---

# Astro site conventions

- **Content is data, not markup.** Every editable string (bio, stats, experience, projects, skills, publications, education, social links) lives in `src/data/content.ts` behind typed interfaces. Components import from `../data/content` and render it. Add a field → extend the interface in `content.ts` first, then read it in the component.
- **One component, one scoped `<style>`.** Each `.astro` file in `src/components/` owns its CSS in a local `<style>` block (Astro scopes it automatically). Do not introduce global stylesheets or CSS frameworks. Shared values flow through CSS custom properties (e.g. `var(--muted)`) defined in `src/layouts/Layout.astro`.
- **Theming.** Light/dark is driven entirely by CSS custom properties — never hard-code colors that should follow the theme; reference the existing `--*` variables.
- **Motion is opt-out.** Animations (e.g. the `reveal` class) must honour `prefers-reduced-motion`; gate motion behind the existing reduced-motion guards rather than adding unconditional transitions.
- **No client JS unless required.** This is a static site — prefer build-time rendering. Add a `<script>` or client directive only when the feature genuinely needs the browser, and keep it tracking-free (no analytics).
- **`astro.config.mjs`** holds `site` (the canonical URL). Change it only when the deploy domain changes (e.g. adding a custom domain via `public/CNAME`).
- **Verify** with `npm run build` (strict type-check) and a manual pass in `npm run dev` — there is no unit-test harness for the markup.
