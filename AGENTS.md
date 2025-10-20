# Repository Guidelines

## Project Structure & Module Organization
- `mkdocs_shadcn_theme/` holds the Python theme package; edit `theme.yml`, Jinja templates, and bundled assets here.
- `src-css/` is the Tailwind entry point; layer additional utilities or component styles in `index.css` and import tokens from `tokens.json`.
- `example/` contains the kitchen-sink MkDocs site (`example/mkdocs.yml`) used to exercise components.
- `tests/visual/` documents manual inspection scenarios; update it whenever UI changes need validation.
- `reports/` and generated assets remain build outputs—do not commit local previews here.

## Build, Test, and Development Commands
- `pnpm install` installs Tailwind and PostCSS tooling (repo uses `pnpm@10.18.x`).
- `pnpm build:css` compiles Tailwind from `src-css/index.css` into `mkdocs_shadcn_theme/templates/assets/css/theme.css` (minified).
- `pnpm watch:css` rebuilds CSS on save; run alongside MkDocs when iterating on styles.
- `mkdocs serve --config-file example/mkdocs.yml` launches the example site with live reload for theme testing.
- `mkdocs build --config-file example/mkdocs.yml` produces a static build; use before publishing screenshots or releases.

## Coding Style & Naming Conventions
- Python follows PEP 8 with four-space indentation; favor descriptive module names mirroring their template or asset purpose.
- Jinja templates use `snake_case.html`; keep macro names aligned with component names (e.g., `card.html` → `{% macro card %}`).
- Tailwind layers belong in `src-css/index.css`; prefer semantic utility classes (e.g., `btn-primary`) that map to tokenized colors.
- Static assets (.svg, .js) live under `mkdocs_shadcn_theme/templates/assets`; name files by component (`nav-toggle.svg`) to ease template references.

## Testing Guidelines
- No automated suite exists yet; rely on the visual scenarios outlined in `tests/visual/README.md`.
- Before opening a PR, run `pnpm build:css` and `mkdocs serve` to verify layout, typography, and interactive states across sample pages.
- When changing tokens or global CSS, capture comparison screenshots and attach them to the PR for visual regression review.

## Commit & Pull Request Guidelines
- Use short, imperative commit messages (`Fix CI workflow`, `Scaffold theme package`) and scope them to a single concern.
- Ensure commits include regenerated CSS when source styles change; never commit unused build artefacts.
- Pull requests should summarize motivation, list notable UI changes, and link any relevant issues.
- Add testing notes (commands run, browsers checked) and include screenshots or gifs for UI updates before requesting review.
