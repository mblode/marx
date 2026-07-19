---
"marx-css": minor
---

Polish the default look and motion, from a holistic design/typography/motion audit:

- Rounder corners (`--marx-radius` `0.25rem` → `0.5rem`) across buttons, inputs, code, media, dialogs, and kbd.
- Tighter reading measure (`--marx-measure` `48rem` → `42rem`) for a more comfortable line length.
- Evened-out heading scale so h2/h3/h4 read as distinct ranks, plus subtle negative tracking on h1/h2.
- Buttons use medium weight (500) and snappier `ease` transitions.
- New opt-in motion (gated behind `prefers-reduced-motion`): smooth in-page scrolling, and a fade/scale entrance for `<dialog>` and `[popover]` via `@starting-style` + `allow-discrete`.
- Landing page: display-size hero, primary/secondary CTA hierarchy, cleaner nav, proper heading levels, curly quotes.

Override any of these with the `--marx-*` tokens if you preferred the old values.
