---
title: Frequently Asked Questions
description: Answers to the most common questions about installing, customising, and maintaining the MkDocs Shadcn Theme.
---

# Frequently Asked Questions

## How do I install the theme?

Install via pip: `pip install mkdocs-shadcn-theme`. Then set `theme.name: shadcn` in `mkdocs.yml`. See [Getting Started](getting-started.md) for a full walkthrough.

## Do I need Node.js or pnpm?

Only if you want to rebuild the bundled Tailwind CSS after customising tokens or adding utilities. Shipping the default theme requires Python and MkDocs only.

## Where do I put custom templates?

Create an `overrides/` directory (or use `theme.custom_dir`) and drop partials inside, e.g. `overrides/partials/footer.html`. MkDocs automatically prefers your overrides over the packaged templates.

## Can I disable the command palette or theme toggle?

Yes. Remove `palette.switcher` from `theme.features` to hide the theme toggle. Omit `partials/command_palette.html` in your overrides to remove the palette.

## Does the theme support internationalisation (i18n)?

MkDocs handles localisation via standard Markdown hierarchy (`docs/i18n/`). The Shadcn Theme inherits whatever structure you provide—enable alternate languages in the navigation or via plugins such as `mkdocs-static-i18n`.

## How do I add analytics or other scripts?

Use the `extra_javascript` configuration key or override `main.html` / `partials/footer.html` to inject tracking snippets.

## How do I keep up with updates?

Check [Changelog](changelog.md) for release highlights. For pinned deployments, add `mkdocs-shadcn-theme` to your `requirements.txt` with an explicit version.
