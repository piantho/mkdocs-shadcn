---
title: Guides
description: Explore practical workflows for configuring, styling, and shipping documentation with the MkDocs Shadcn Theme.
---

# Guides

Use these guides to go deeper once you have the theme up and running.

## Customise the Look and Feel

- **[Theming](theming.md)** – edit design tokens, extend Tailwind layers, and override templates without forking the package.
- **Fonts & Typography** – set `tokens.json` typography values and rebuild Tailwind to roll out brand fonts.
- **Layout Tweaks** – adjust `theme.options.layout` for wider content, sticky footers, or alternative navigation patterns.

## Keep Docs Accessible

- **[Accessibility Checklist](accessibility.md)** – ship inclusive content and preserve keyboard/screen-reader support as you customise.
- Use semantic headings, descriptive link text, and visible focus states for every new component.

## Authoring Patterns

- Embed component demos with the `component` fence to show UI alongside Markdown.
- Group long procedures with admonitions, tabs, and checklist-style callouts.
- Capture reusable snippets in `docs/snippets/` and include them via Markdown includes (e.g. `!!! include`).

## Build & Deploy

- Run `mkdocs build` before releasing.
- Publish to GitHub Pages, Netlify, or any static host—no extra tooling required.
- Automate builds via CI (GitHub Actions, GitLab CI) using `pip install mkdocs mkdocs-shadcn-theme` and `mkdocs build`.

Looking for quick answers? Jump to the [FAQ](../faq.md) or use the search bar (`/`) and command palette (`⌘/Ctrl + K`).
