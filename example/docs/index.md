---
title: Shadcn Theme Overview
description: Learn what the MkDocs Shadcn Theme offers and how it elevates your documentation experience.
---

# Shadcn Theme for MkDocs

The Shadcn Theme brings the polish of modern design systems to MkDocs. It pairs Tailwind CSS utilities with sensible defaults so teams can ship documentation that feels cohesive, responsive, and accessible without building a frontend stack from scratch.

## Quickstart

```bash
# 1. Install MkDocs and the theme
pip install mkdocs mkdocs-shadcn-theme

# 2. Create a new docs project (optional)
mkdocs new my-docs && cd my-docs

# 3. Enable the theme
```

```yaml title="mkdocs.yml"
site_name: My Documentation
theme:
  name: shadcn
  features:
    - search
    - toc.integrated
    - navigation.sections
    - code.copy
    - palette.switcher
  options:
    brand:
      name: "My Docs"
      logo_light: assets/logo-light.svg
      logo_dark: assets/logo-dark.svg
```

```bash
# 4. Start the dev server
mkdocs serve
```

From here you can customise tokens, extend Tailwind utilities, and wire up advanced navigation — skip ahead to [Getting Started](getting-started.md) for a step-by-step guide.

## Feature Highlights

- **Responsive shell** with full-width top bar, sticky sidebar, and contextual table of contents.
- **Integrated search** powered by Lunr, with a dedicated search page and keyboard shortcuts.
- **Design tokens everywhere** so typography, spacing, and colours stay consistent across templates and components.
- **Command palette, copy-to-clipboard, and version switcher** shipping as first-class partials.
- **Tailwind-driven component library**: buttons, badges, cards, and component demo fences are ready to use.

## Layout at a Glance

| Region        | Purpose                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------- |
| Top bar       | Persistent brand, search, theme toggle, and utility links across all breakpoints              |
| Sidebar       | Sticky navigation with collapsible sections and version listings on larger screens            |
| Content area  | Markdown-rendered content with refined typography, tables, callouts, code blocks, and tabs    |
| Table of contents | Optional sticky ToC for articles, auto-generated from headings                             |

The layout is defined in `mkdocs_shadcn_theme/templates/main.html` and can be extended or overridden per project.

## What to Read Next

- **[Getting Started](getting-started.md)** – install the theme, configure MkDocs, and rebuild the bundled Tailwind CSS.
- **[Theming Guide](guides/theming.md)** – update `tokens.json`, override templates, and ship bespoke component styling.
- **[Component Reference](reference/components.md)** – explore the bundled utilities for buttons, badges, cards, and live previews.
- **[Keyboard Shortcuts](reference/shortcuts.md)** – help power users move quickly through the docs.
- **[Accessibility Checklist](guides/accessibility.md)** – keep your documentation inclusive as you customise the theme.

Ready to publish? Run `mkdocs build` and deploy to GitHub Pages, Netlify, or any static host — the Shadcn Theme keeps your docs lightweight, fast, and consistent.
