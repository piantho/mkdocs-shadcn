# mkdocs-shadcn-theme

A Shadcn-inspired, Tailwind-powered MkDocs theme with batteries included. This repository contains the MkDocs theme package, Tailwind build pipeline, and an example "kitchen sink" documentation site that exercises the theme's features.

## Quick start

```bash
pnpm install
pnpm build:css
mkdocs build --config-file example/mkdocs.yml
```

## Project layout

- `mkdocs_shadcn_theme/`: Theme package assets, templates, and configuration
- `src-css/`: Tailwind source CSS entry point and design tokens wiring
- `example/`: Example MkDocs project using the theme
- `package.json`: Tailwind build scripts
- `pyproject.toml`: Python package metadata

## Development tasks

1. Install dependencies with `pnpm install`.
2. Run `pnpm watch:css` during theme development.
3. Use `mkdocs serve --config-file example/mkdocs.yml` to preview the example site.

