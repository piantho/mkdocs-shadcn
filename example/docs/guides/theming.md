# Theming

The Shadcn Theme exposes every key design decision through tokens and Tailwind layers, so you can align documentation with your product brand in minutes. This guide walks through the main levers.

## 1. Update Design Tokens

All colour, typography, spacing, and radius values live in `tokens.json`. Editing the JSON automatically updates Tailwind’s config via `tailwind.config.cjs`.

```json title="tokens.json"
{
  "color": {
    "bg": "0 0% 100%",
    "fg": "222 47% 11%",
    "primary": "221 83% 53%",
    "primary-fg": "0 0% 100%",
    "muted": "210 40% 96%",
    "muted-fg": "215 20% 50%"
  },
  "radius": {
    "sm": "0.25rem",
    "md": "0.5rem",
    "lg": "0.75rem"
  },
  "font": {
    "sans": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    "mono": "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  }
}
```

After editing, rebuild the CSS bundle:

```bash
pnpm build:css
```

## 2. Extend Tailwind Layers

Add custom utilities or components inside `src-css/index.css`, then re-run the build command. The file already contains button and badge utilities that demonstrate the pattern.

```css
@layer components {
  .callout {
    @apply rounded-lg border border-muted bg-muted/30 px-4 py-3 text-sm text-muted-fg;
  }
}
```

## 3. Override Templates

Need a bespoke header or footer? Drop a template into your project’s `overrides/` directory:

```text
docs/
  overrides/
    partials/
      footer.html
```

MkDocs will load your override before the packaged template. Use this approach to add extra header buttons, integrate analytics snippets, or customise the command palette.

!!! tip "Keep overrides minimal"
    Instead of copying entire templates, override specific partials and keep logic close to the original structure. This reduces maintenance when upgrading the theme.

## 4. Adjust Layout Options

The theme exposes layout options through `theme.options`:

```yaml
theme:
  name: shadcn
  options:
    layout:
      max_width: "1240px"
      sidebar_width: "20rem"
    search:
      provider: lunr
    versioning:
      enabled: true
```

## 5. Custom JavaScript

Enhance interactions by extending `mkdocs_shadcn_theme/templates/assets/js/theme.js`. If your project needs additional JavaScript, create `docs/assets/js/custom.js`, reference it via `extra_javascript`, and hook into the DOM once MkDocs loads the page.

## 6. Dark Mode Adjustments

Dark mode inherits tokens from the `.dark` selector inside `src-css/index.css`. Adjust values there to fine-tune contrast ratios or brand colours. Remember to test with the built-in theme toggle and the `/` and `<kbd>t</kbd>` shortcuts.

With these levers you can deliver fully branded docs without forking the core package. Combine tokens, Tailwind utilities, and partial overrides to match any design system.
