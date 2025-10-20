---
title: Getting Started
description: Install the MkDocs Shadcn Theme, wire it into your docs project, and rebuild the Tailwind assets.
---

# Getting Started

Follow this guide to install the MkDocs Shadcn Theme, enable it in your `mkdocs.yml`, and rebuild the bundled Tailwind CSS so the theme matches your brand.

## Requirements

- **Python** 3.9 or later
- **MkDocs** 1.6.0 or later
- Node.js 18+ (for rebuilding Tailwind assets)
- `pnpm` 10.18.x (bundled in this repository for CSS builds)

Install prerequisites using your preferred package manager. Once ready, create or reuse an existing MkDocs project.

## 1. Install the Theme

```bash
pip install mkdocs-shadcn-theme
```

The theme publishes a Python package containing Jinja templates, Tailwind-generated CSS, and JavaScript helpers for the command palette and sidebar.

## 2. Configure `mkdocs.yml`

Update your configuration to load the theme and enable the features you need.

```yaml title="mkdocs.yml"
site_name: Shadcn Theme Docs
theme:
  name: shadcn
  language: en
  features:
    - search
    - toc.integrated
    - navigation.sections
    - code.copy
    - palette.switcher
  options:
    brand:
      name: "Shadcn Theme"
      logo_light: assets/logo-light.svg
      logo_dark: assets/logo-dark.svg
    layout:
      max_width: "1200px"
      sidebar_width: "18rem"
plugins:
  - search
  - minify
  - redirects
  - git-revision-date-localized:
      enable_creation_date: true
      fallback_to_build_date: true
  - awesome-pages
```

!!! tip "Partial overrides"
    Place custom templates in `docs/overrides/` (or another directory set via `theme.custom_dir`). MkDocs merges overrides before rendering, so you can tweak header buttons, sidebar layouts, or footer links without forking the package.

## 3. Serve the Docs

```bash
mkdocs serve
```

The dev server reloads when Markdown, templates, or assets change. A command palette is available via <kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd>, and `/` focuses search.

## 4. Build & Ship

```bash
mkdocs build
```

MkDocs writes the static site to `site/`. Deploy the directory to GitHub Pages, Netlify, Cloudflare Pages, S3, or any other static host.

## Next Steps

- **Customise the theme** – follow the [Theming guide](guides/theming.md) to update tokens, add utilities, and override templates.
- **Review best practices** – keep docs inclusive with the [Accessibility checklist](guides/accessibility.md).
- **Reference components & shortcuts** – explore bundled utilities in the [Component Reference](reference/components.md) and available [keyboard shortcuts](reference/shortcuts.md).
- **Troubleshoot quickly** – scan the [FAQ](faq.md) for common questions.

Need to rebuild Tailwind after changing design tokens? Install Node.js + pnpm, then run `pnpm install && pnpm build:css`. Commit the regenerated CSS so downstream projects stay in sync.
