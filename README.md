# [Marx](https://mblode.github.io/marx/)

[![npm version](https://img.shields.io/npm/v/marx-css.svg)](https://www.npmjs.com/package/marx-css)

**The classless CSS framework (perfect for Communists).**

    No JavaScript. No classes. Just raw HTML that looks good.

Add one stylesheet to plain, semantic HTML and the page styles itself. No class
names, no build step, no config. Marx 5 is a full rewrite: automatic light and
dark mode, a small `--marx-*` theming API, and **zero specificity**, so any CSS
you write wins.

## Is Marx for you?

Marx is for small projects where you'd rather write content than wire up a
component library: prose sites, docs, prototypes, quick landing pages. Use it
straight from the box, or retheme it with a few custom properties.

## Key features

- **Zero classes:** it works with the HTML you already have.
- **Automatic dark mode** with `color-scheme` and `light-dark()`. No toggle, no JS.
- **Zero specificity:** every rule is wrapped in `:where()` inside cascade
  layers, so your CSS overrides Marx without a fight or a single `!important`.
- **Modern base:** a small, modern reset so browsers render consistently.
- **Themeable:** one set of `--marx-*` custom properties is the whole API.
- **Modern CSS:** logical properties (RTL-ready), a `rem` type scale,
  `:focus-visible` outlines, and motion behind `prefers-reduced-motion`.
- It just works.

## [Demo](https://mblode.github.io/marx/)

## Quick start

### npm

```bash
npm install marx-css
```

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/marx-css@5/css/marx.min.css">
```

### Bundler

With any bundler that reads the `exports` field (Vite, webpack, esbuild, …):

```js
import "marx-css";
```

That loads the minified stylesheet.

## Dark mode

Dark mode is automatic. Marx sets `color-scheme: light dark` and defines its
colors with `light-dark()`, so the page follows the visitor's OS or browser
preference with no toggle and no JavaScript.

Force a single scheme by overriding `color-scheme` on the root in your own CSS:

```css
:root { color-scheme: light; } /* always light */
:root { color-scheme: dark;  } /* always dark  */
```

## Theming

The whole theming API is the `--marx-*` custom properties below. Override any
of them in your own (unlayered) CSS. Because Marx lives in cascade layers, your
values win. Colors use `light-dark()`, so set both schemes at once or just
change the value you care about.

| Token | Purpose |
|---|---|
| `--marx-leading` | Base line-height (`1.5`) |
| `--marx-flow` | Vertical rhythm between block elements (`1.25rem`) |
| `--marx-measure` | Max content width of `main` (`48rem`) |
| `--marx-radius` | Corner radius for controls and surfaces |
| `--marx-space-2xs … -xl` | Spacing scale (`0.25rem` to `2.5rem`) |
| `--marx-text-sm / -base` | Body type sizes |
| `--marx-text-h1 … -h6` | Heading sizes (`2.5rem` to `1rem`) |
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

Example, a warmer accent and rounder corners:

```css
:root {
  --marx-primary: hotpink;
  --marx-radius: 0.75rem;
}
```

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

Installing `marx-css` gives you the compiled stylesheets plus the source:

```
.
├── LICENSE.md
├── README.md
├── css
│   ├── marx.css        # readable build
│   ├── marx.min.css    # minified build (the one you ship)
│   └── marx.min.css.map
└── src                 # authored partials, bundled by Lightning CSS
    ├── marx.css        # entry: declares the @layer order
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
Safari 17.5+. Older browsers still get a readable page: `color-scheme` keeps
text legible in light and dark, and buttons keep their color. They just lose
the finer theming like token-driven borders and surface tints.

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

## License

MIT

---

Crafted by [<img src="https://matthewblode.com/avatar-circle.png" width="20" align="top" />](https://matthewblode.com) [Matthew Blode](https://matthewblode.com)
