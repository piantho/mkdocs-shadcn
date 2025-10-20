# Contributing

Thank you for your interest in contributing to the MkDocs Shadcn theme! This project aims to deliver a high-quality MkDocs experience inspired by the shadcn design system.

## Development environment

1. Install Node.js 18+ and Python 3.9+.
2. Install PNPM globally: `npm install -g pnpm`.
3. Run `pnpm install` to install JavaScript dependencies.
4. Use `pnpm watch:css` during active development and `mkdocs serve --config-file example/mkdocs.yml` to preview changes.

## Pull requests

- Keep pull requests focused and include relevant documentation updates.
- Ensure Tailwind CSS is rebuilt via `pnpm build:css` before committing.
- Run `mkdocs build --config-file example/mkdocs.yml` to confirm the example site builds successfully.
- Add tests or update the example site when introducing new features.

## Code style

- Follow MkDocs template conventions for Jinja2 templates.
- Prefer utility classes from TailwindCSS; add custom CSS via tokens when necessary.
- Keep JavaScript vanilla and modular, avoiding heavy frameworks.

## Reporting issues

File issues in the GitHub repository with clear reproduction steps and screenshots when applicable.
