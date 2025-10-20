---
title: Component Reference
description: Reusable utilities and patterns bundled with the MkDocs Shadcn Theme.
---

# Component Reference

The Shadcn Theme ships Tailwind utilities and Markdown helpers for common documentation components. This page catalogs what is available by default.

## Component Demo Fence

Use the `component` fence to render live HTML alongside source code. It is backed by `pymdownx.superfences` and the `component-example` class.

````markdown
```component
<div class="rounded-lg border border-muted bg-bg p-6 shadow-sm">
  <h3 class="text-lg font-semibold text-fg">Live preview</h3>
  <p class="mt-2 text-sm text-muted-fg">Embed UI examples directly in Markdown.</p>
</div>
```
````

## Buttons

Utility classes are defined in `src-css/index.css`:

- `btn` – base button layout
- `btn-primary`, `btn-secondary`, `btn-outline` – visual variants
- `btn-sm`, `btn-lg` – size modifiers

```component
<div class="flex flex-wrap gap-3">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-outline">Outline</button>
</div>
```

## Badges

```component
<div class="flex flex-wrap gap-2">
  <span class="badge badge-primary">New</span>
  <span class="badge badge-secondary">Beta</span>
  <span class="badge badge-muted">Deprecated</span>
  <span class="badge badge-accent">Experimental</span>
</div>
```

## Cards

```component
<div class="rounded-lg border border-muted bg-bg p-6 shadow-sm transition-shadow hover:shadow-md">
  <div class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-muted-fg">
    <span class="badge badge-primary">Release</span>
    <span>v0.10</span>
  </div>
  <h3 class="mt-3 text-lg font-semibold text-fg">Upgrade guide</h3>
  <p class="mt-2 text-sm text-muted-fg">
    Step-by-step instructions for moving to the latest major version.
  </p>
  <div class="mt-4 flex gap-2">
    <a class="btn btn-outline" href="#">Read guide</a>
    <a class="btn btn-primary" href="#">Changelog</a>
  </div>
</div>
```

## Callouts & Tabs

Standard MkDocs syntax is restyled automatically:

```markdown
!!! note
    Use callouts to highlight context or prerequisites.

=== "Python"
    ```python
    print("Hello Shadcn")
    ```
=== "JavaScript"
    ```js
    console.log("Hello Shadcn");
    ```
```

## Extending Components

1. Add new utilities under the appropriate section in `src-css/index.css`.
2. Rebuild Tailwind with `pnpm build:css`.
3. Document usage here or in your own project’s reference section.

For advanced patterns (modals, tables, command palette integrations), create reusable partials in `overrides/partials/` and import them into Markdown via `markdown_include` or custom shortcodes.
