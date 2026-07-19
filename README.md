# [Marx](https://mblode.github.io/marx/)

[![npm version](https://img.shields.io/npm/v/marx-css.svg)](https://www.npmjs.com/package/marx-css)

**The classless CSS framework (perfect for Communists).**

    No JavaScript. No classes. Just raw HTML that looks good.

Drop one stylesheet onto a page of plain, semantic HTML and it turns
drop-dead gorgeous — no class names, no build step, no config. Marx v5 is a
ground-up rewrite for the modern web: automatic light/dark mode, a tidy
`--marx-*` theming API, and **zero specificity**, so any CSS you write always
wins.

## Is Marx for you?

Marx is for any project (especially small ones) where you'd rather write
content than wire up a component library. Prose sites, docs, prototypes,
side-project landing pages, HTML emails' cousins — anywhere raw HTML should
just look right. Use it straight from the minified box, or retheme it with a
handful of custom properties.

## Key features

- **Zero classes** — it already works with the HTML you have.
- **Automatic dark mode** via `color-scheme` + `light-dark()`. No toggle, no JS.
- **Zero specificity** — every rule is wrapped in `:where()` inside cascade
  layers, so your own CSS overrides Marx without a specificity fight or a single
  `!important`.
- **Modern base** — a compact, modern-preflight-style reset means modern
  browsers render consistently.
- **Themeable** — one flat set of `--marx-*` custom properties is the whole API.
- **Modern CSS** — logical properties (RTL-ready), `rem`-based type scale,
  `:focus-visible` outlines, and motion gated behind `prefers-reduced-motion`.
- It just works.

## [Demo](https://mblode.github.io/marx/)

## Quick start

Pick whichever suits your setup.

### npm

```bash
npm install marx-css
```

### CDN

```html
<!-- jsDelivr (recommended) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/marx-css@5/css/marx.min.css">

<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/marx-css@5/css/marx.min.css">
```

For production, pin an exact version and add [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
so the browser rejects a tampered file:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/marx-css@5.0.0/css/marx.min.css"
  integrity="sha384-noo+dE2BdMuqkmKxLP0ZPNcFFPome+kRF7f6RCI0q+F98DQ8qh1ZeUihv8n33wVl"
  crossorigin="anonymous"
>
```

When you pin a different release, swap in its hash — jsDelivr shows the
current SRI hash for any file via its "SRI" link, so it always matches the exact
version you pin.

### Bundler

With any bundler that reads the `exports` field (Vite, webpack, esbuild, …):

```js
import "marx-css";
```

That resolves to the minified stylesheet — no path to remember.

## Dark mode

Dark mode is automatic. Marx sets `color-scheme: light dark` and defines its
colors with `light-dark()`, so the page follows the visitor's OS/browser
preference with no toggle and no JavaScript.

Force a single scheme by overriding `color-scheme` on the root in your own CSS:

```css
:root { color-scheme: light; } /* always light */
:root { color-scheme: dark;  } /* always dark  */
```

## Theming

The entire theming API is the `--marx-*` custom properties below. Override any
of them in your own (unlayered) CSS — because Marx lives in cascade layers, your
values always win. Colors use `light-dark()`, so set both schemes at once or
just change the value you care about.

| Token | Purpose |
|---|---|
| `--marx-leading` | Base line-height (`1.5`) |
| `--marx-flow` | Vertical rhythm between block elements (`1.25rem`) |
| `--marx-measure` | Max content width of `main` (`48rem`) |
| `--marx-radius` | Corner radius for controls and surfaces |
| `--marx-space-2xs … -xl` | Spacing scale (`0.25`–`2.5rem`) |
| `--marx-text-sm / -base` | Body type sizes |
| `--marx-text-h1 … -h6` | Heading sizes (`2.5rem` → `1rem`) |
| `--marx-font-sans / -serif / -mono` | Font stacks |
| `--marx-font-body` | Font applied to `body` (defaults to sans) |
| `--marx-bg` | Page background |
| `--marx-text` | Body text color |
| `--marx-muted` | Secondary/subtle text |
| `--marx-disabled` | Disabled control text |
| `--marx-border` | Borders and dividers |
| `--marx-surface` | Raised surfaces (code, tables, wells) |
| `--marx-primary` / `--marx-primary-strong` | Button/brand blue + hover |
| `--marx-on-primary` | Text on primary surfaces |
| `--marx-link` / `--marx-link-hover` | Link colors |
| `--marx-ring` | `:focus-visible` outline color |
| `--marx-danger` | Error/invalid feedback |
| `--marx-mark` | `<mark>` highlight |

Example — a warmer accent and roomier corners:

```css
:root {
  --marx-primary: hotpink;
  --marx-radius: 0.75rem;
}
```

## Migrating from v4

v5 renames every variable under a `--marx-*` namespace and switches to a
`rem`-based scale. If you customised v4 through its `--*` variables, remap them:

| v4 variable | v5 token | Notes |
|---|---|---|
| `--link-color` | `--marx-link` | |
| `--link-hover-color` | `--marx-link-hover` | |
| `--primary` | `--marx-primary` | |
| `--primary-600` | `--marx-primary-strong` | |
| `--text` | `--marx-text` | |
| `--secondary` | `--marx-muted` | |
| `--disabled` | `--marx-disabled` | |
| `--grey` | `--marx-surface` | |
| `--dividers` | `--marx-border` | |
| `--red` | `--marx-danger` | |
| `--yellow` | `--marx-mark` | |
| `--br` (`4px`) | `--marx-radius` (`0.25rem`) | |
| `--xs-pad` (`4px`) | `--marx-space-2xs` (`0.25rem`) | |
| `--sm-pad` (`8px`) | `--marx-space-xs` (`0.5rem`) | |
| `--md-pad` (`16px`) | `--marx-space-md` (`1rem`) | |
| `--lg-pad` (`20px`) | `--marx-space-lg` (`1.25rem`) | |
| `--xlg-pad` (`40px`) | `--marx-space-xl` (`2.5rem`) | |
| `--sans-serif` | `--marx-font-sans` | |
| `--serif` | `--marx-font-serif` | |
| `--monospace` | `--marx-font-mono` | |
| `--font-family` | `--marx-font-body` | |
| `--font-size-base` (`16px`) | `--marx-text-base` (`1rem`) | |
| `--font-size-sm` (`14px`) | `--marx-text-sm` (`0.875rem`) | |
| `--font-size-h1` (`40px`) | `--marx-text-h1` (`2.5rem`) | |
| `--font-size-h2` … `--font-size-h6` | `--marx-text-h2` … `--marx-text-h6` | Now `2rem`, `1.75rem`, `1.5rem`, `1.25rem`, `1rem` |
| `--font-size-base` / `--font-size-sm` | `--marx-text-base` / `--marx-text-sm` | |
| `--line-height-base` | `--marx-leading` | |
| `--accent` | — | Dropped (unused) |
| `--sm-breakpoint` / `--lg-breakpoint` | `--marx-measure` | Dropped: a `var()` inside a media query never worked. `--marx-measure` now controls the layout width instead |

Other breaking changes worth knowing:

- **Automatic dark mode** — pages now respond to `prefers-color-scheme`. Force a
  scheme with `:root { color-scheme: light }` if you relied on always-light.
- **Links are subtly underlined** by default (accessibility), not color-only.
- **`rem`-based scale** — sizes are relative units now; they respect the user's
  root font size.
- **Buttons and form fields** use `:focus-visible` outlines instead of the old
  focus styles.
- **Zero specificity** — Marx no longer competes with your CSS; drop any
  `!important` overrides you added to beat v4.

## Basic template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Marx Template</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/marx-css@5/css/marx.min.css">
</head>
<body>
  <!-- main is the centered container -->
  <main>
    <nav>
      <ul>
        <li><a href="#"><b>First</b></a></li>
        <li><a href="#">Second</a></li>
        <li><a href="#">Third</a></li>
      </ul>
    </nav>

    <article>
      <h1>Article</h1>
      <p>Plain HTML, styled automatically.</p>
    </article>

    <footer>
      <p>&copy; Matthew Blode</p>
    </footer>
  </main>
</body>
</html>
```

## What's included

Installing `marx-css` gives you the compiled stylesheets plus the authored
source:

```
.
├── LICENSE.md
├── README.md
├── css
│   ├── marx.css        # readable build
│   ├── marx.min.css    # minified build (the one you ship)
│   └── marx.min.css.map
└── src                 # authored partials, bundled by Lightning CSS
    ├── marx.css        # entry — declares the @layer order
    ├── _tokens.css     # the --marx-* theming API
    ├── _preflight.css  # cross-browser reset
    ├── _base.css
    ├── _typography.css
    ├── _tables.css
    ├── _buttons.css
    └── _form.css
```

## Browser support

Marx targets Baseline 2024 browsers: Chrome/Edge 123+, Firefox 120+, and
Safari 17.5+ (all released by early 2024). Older browsers still get a readable
page — `color-scheme` keeps text legible in both light and dark, and buttons
keep their color — they just lose the finer theming (token-driven borders and
surface tints).

## Building from source

```bash
git clone https://github.com/mblode/marx.git
cd marx
npm install
npm run build     # bundles src/ -> css/
```

See [AGENTS.md](AGENTS.md) for the architecture and contribution conventions.

## Contributing to Marx

Pull requests are the way to go.

## Creators

**Matthew Blode**

- <https://github.com/mblode>
- <http://codepen.io/mblode>

## License

MIT © [Matthew Blode](http://matthewblode.com)

---

Crafted by [<img src="https://matthewblode.com/avatar-circle.png" width="20" align="top" />](https://matthewblode.com) [Matthew Blode](https://matthewblode.com)
