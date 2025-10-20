# Accessibility

The Shadcn Theme is built with WCAG 2.1 AA in mind. Use this checklist when authoring content or extending the theme so readers can navigate comfortably with assistive technologies.

## Semantic Structure

- Write headings in logical order (`h1`, `h2`, …) — the sidebar and table of contents mirror your hierarchy.
- Use lists for sequences or steps, and tables only for tabular data.
- Provide descriptive link text that makes sense out of context.

## Colour and Contrast

- When editing `tokens.json`, ensure text meets a **4.5:1** contrast ratio (AA) or **3:1** for large text.
- Validate contrast using tools such as [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) or browser DevTools.
- Convey meaning with more than colour alone (e.g., add icons or text labels).

## Keyboard Support

- Test pages using only the keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`, arrow keys).
- Confirm focus states remain visible after customising buttons or links.
- The command palette and sidebar already trap focus where appropriate — double-check overrides preserve `data-*` attributes so scripts continue to work.

## Screen Readers

- Provide `aria-label`s for icon-only buttons and ensure `sr-only` text exists where necessary.
- Use `aria-expanded`, `aria-controls`, and landmark roles when building bespoke navigation items.
- Mark purely decorative SVGs with `aria-hidden="true"` and omit redundant `title` elements.

## Motion and Animation

- Keep animations subtle and respect the user’s `prefers-reduced-motion` preference when adding custom transitions.
- Avoid auto-rotating carousels or animations that cannot be paused.

## Content Guidelines

- Ensure code snippets include language identifiers for syntax highlighting (improves screen-reader pronunciation).
- When embedding media, provide captions, transcripts, or alt text.
- Structure long procedures with headings, callouts, and numbered steps to aid scanning.

Following these practices keeps your documentation inclusive as you customise the theme. Pair this checklist with automated audits (Lighthouse, axe) before every release.
