# Silvio Pavanetto — Portfolio

## Principles to always follow

Critical thinking is the foundation of everything: reason from first principles and favor simplicity above all else.
Prioritize efficiency and maintainability while preserving every requested feature and the state-of-the-art quality of your work. The principles below enforce that foundation.
These principles govern every line written, every claim made, every gate crossed. Every skill, every phase, every subagent in the development-skills plugin abides by them.
A skipped gate, a suppressed test, a swallowed warning, a hidden failure — each is a violation, regardless of intent.
When two principles conflict, pick the application a critical reader would find less surprising.

0. **Don't pander · be critical.** Challenge assumptions, push back on bad ideas. No flattery openers. User confirmation validates the decision, not the analysis.
1. **Think before coding.** State assumptions explicitly. Ask when unclear. Don't guess, don't hide confusion.
2. **Plan before implementing.** Explore → plan → lock the HOW (edge cases · data shapes · error semantics · contract boundaries · test scope · rollback) → code.
3. **Simplicity by default.** Minimum code that solves the problem. Three filters before adding anything: existing mechanism covers >50%? · can this be one fewer file / abstraction / config / dependency? · would removing it cause a real failure? A refactor must measurably improve one of: clear · descriptive · efficient · performant · reliable · robust · maintainable.
4. **Surgical changes.** Every changed line traces to the request. No refactoring of adjacent code. No error handling for impossible scenarios. Clean up only your own mess.
5. **All signal, zero noise.** No dead branches, no defensive try/catch on safe paths, no wrapper-for-nothing functions, no unused imports. No filler openers, no trailing summaries when the diff is the answer.
6. **Comments explain WHY, not WHAT.** Non-obvious business logic, hidden constraints, workarounds — yes. Restating what the next line does — no.
7. **TDD: Red → Green → Refactor.** No production code without a failing test first. One test = one cycle. Wrote production code before the test? Delete it. Untestable (UI-heavy / infrastructure / config-only) → closest automated check + documented WHY + manual evidence.
8. **No claim without fresh evidence.** IDENTIFY → RUN → READ → VERIFY → CLAIM. *"I'm confident"* is not a step. Skipping any step = lying, not verifying.
9. **Root cause, not symptoms.** Fix the underlying error, never suppress it. `# type: ignore`, swallowed exceptions, disabled tests, `--no-verify` are admissions the bug is winning.
10. **Document every discovery.** WHY → `docs/chronicles/`, HOW → `docs/plans/`, standards → `.agents/rules/<topic>.md`, essentials → `AGENTS.md`. Pay investigation costs once.
11. **Context is the constraint.** Subagents isolate noise. Compact early. References on demand, not eagerly. Standing instructions, not one-shot steps.
12. **No commits without explicit user request.** Approving a plan, completing phases, passing review — none are permission. Omit AI-attribution trailers when authorized.
13. **Slim docs · English · MEMORY hygienic.** `AGENTS.md` ≤ 70 lines, brief directives, no section headings. English only across all artifacts. `MEMORY.md` minimal — project facts → `AGENTS.md` / `.agents/rules/`; user-specific → gitignored personal docs.

Always use the `development-skills` plugin for every task on this project (brainstorming, development, bug fixing, new feature, ...). If the plugin is not available on the user's system, notice it and tell the user to download it.

Personal portfolio of Silvio Pavanetto — an Astro static site deployed to GitHub Pages, fully content-driven from a single data file.

- Node ≥ 22.12. Install with `npm install`; on an `EACCES` cache error run `npm install --cache /tmp/npm-cache` (local quirk, not CI).
- Dev `npm run dev` (`http://localhost:4321`) · build `npm run build` → `./dist` · preview `npm run preview`.
- Deploy is automatic — pushing to `main` runs `.github/workflows/deploy.yml` (`withastro/action` build → `actions/deploy-pages`); Pages source is **GitHub Actions**, not a branch. No manual step beyond `git push`.
- All editable content (bio, stats, experience, projects, skills, publications, education) lives in `src/data/content.ts` — change content there, never in component markup.
- CV source is `cv/cv.tex` (XeLaTeX). Edit it, rebuild with `tectonic cv/cv.tex`, then copy the output to `public/cv.pdf` (keep the filename; `cv/cv.pdf` is a gitignored build artifact). Keep `public/.nojekyll` so Pages serves `_astro/`.
- No automated test suite exists; verify changes with `npm run build` (type-checks under `astro/tsconfigs/strict`) plus manual review in `npm run dev`.
- Rule files — read the file when working in its scope (Codex must `Read` it; Claude auto-loads via `paths:`):

| Rule | Scope (`paths:`) | Topic |
|------|------------------|-------|
| `.agents/rules/astro-site.md` | `src/**`, `astro.config.mjs` | Astro component & content conventions, scoped CSS, theming, accessibility |

- Local machine instructions: `.claude/CLAUDE.md` (Claude, gitignored) · `~/.codex/AGENTS.md` (Codex, user-global).
