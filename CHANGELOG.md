# marx-css

## 5.2.1

### Patch Changes

- fd775d1: Give single `<select>` menus a custom dropdown chevron with proper spacing, instead of the cramped native arrow jammed against the edge. Multi/size selects keep their native rendering.

## 5.2.0

### Minor Changes

- 874f395: Polish the default look and motion, from a holistic design/typography/motion audit:

  - Rounder corners (`--marx-radius` `0.25rem` → `0.5rem`) across buttons, inputs, code, media, dialogs, and kbd.
  - Tighter reading measure (`--marx-measure` `48rem` → `42rem`) for a more comfortable line length.
  - Evened-out heading scale so h2/h3/h4 read as distinct ranks, plus subtle negative tracking on h1/h2.
  - Buttons use medium weight (500) and snappier `ease` transitions.
  - New opt-in motion (gated behind `prefers-reduced-motion`): smooth in-page scrolling, and a fade/scale entrance for `<dialog>` and `[popover]` via `@starting-style` + `allow-discrete`.
  - Landing page: display-size hero, primary/secondary CTA hierarchy, cleaner nav, proper heading levels, curly quotes.

  Override any of these with the `--marx-*` tokens if you preferred the old values.

## 5.1.1

### Patch Changes

- 98fe33a: Tighten the README: shorter, plainer copy with every em dash removed. No code or API changes.

## 5.1.0

### Minor Changes

- cf34745: Style `<meter>` and `<progress>` as clean, rounded, full-width Marx bars instead of the native browser chrome, and add `--marx-success` / `--marx-warning` tokens (completing the feedback palette alongside `--marx-danger`). Meter fills use success/warning/danger by band; progress fills with the primary color. Also simplifies the README (drops the migration table and SRI section).

## 5.0.0

### Major Changes

- 052ce74: Marx 5: a ground-up modernization for the 2026 web, borrowing patterns from Tailwind CSS Preflight v4.3 and shadcn/ui typeset.

  **Highlights**

  - Automatic light/dark mode via `color-scheme` + `light-dark()` — force a scheme with `:root { color-scheme: light }` (or `dark`).
  - Zero specificity: every rule is wrapped in `:where()` inside cascade layers (`marx.base`, `marx.content`, `marx.forms`), so any consumer CSS overrides Marx.
  - New `--marx-*` design-token API (oklch colors, `rem` type scale) replaces the old unprefixed variables — see the migration table in the README.
  - Modern preflight-style base replaces the vendored sanitize.css snapshot.
  - Typeset-style rhythm: one-directional `margin-block-start` flow, logical properties throughout (RTL-ready), `text-wrap: balance`/`pretty`, styled `dialog`/`[popover]`/`kbd`, accent-colored native controls, `field-sizing` textareas.
  - Accessibility: `:focus-visible` outlines everywhere (no more removed outlines), `:user-invalid` instead of `:invalid`, transitions gated behind `prefers-reduced-motion`, print styles, WCAG AA-checked palette in both schemes.
  - Build swapped from PostCSS to Lightning CSS; package gains `exports`/`style`/`sideEffects` fields.

  **Breaking changes**

  - Theming variables renamed (`--md-pad` → `--marx-space-md`, `--link-color` → `--marx-link`, …) — full table in the README.
  - Pages now follow the OS dark-mode preference by default; add `:root { color-scheme: light }` to keep v4's always-light look.
  - Links are subtly underlined; type scale is `rem`-based; browser floor is Baseline 2024 (Chrome/Edge 123+, Firefox 120+, Safari 17.5+), with older browsers degrading to a readable light theme.

## 4.1.4

### Patch Changes

- 53db80f: Fix CI/CD

## 4.1.3

### Patch Changes

- e8e193d: Update deps

## 4.1.2

### Patch Changes

- c9ff335: Add changesets and GitHub Actions for automated npm publishing
