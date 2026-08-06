<div align="center">

# [Marx](https://blode.co/marx)

**The classless CSS framework that styles plain semantic HTML (perfect for Communists)**

Add one stylesheet and the page styles itself: no class names, no build step, no config.

<p align="center">
  <a href="https://www.npmjs.com/package/marx-css">
    <img src="https://img.shields.io/npm/v/marx-css?style=flat&colorA=000000&colorB=000000" />
  </a>
  <a href="https://github.com/mblode/marx/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/mblode/marx?style=flat&colorA=000000&colorB=000000" />
  </a>
</p>

</div>

## Demo

Every element Marx styles, on one page.

<p>
<a href="https://blode.co/marx">
<img alt="View demo" src=".github/assets/demo.svg" width="200" />
</a>
</p>

## Install

```bash
npm install marx-css
```

Or skip the install and link `https://cdn.jsdelivr.net/npm/marx-css@5/css/marx.min.css` directly.

## Quickstart

One `<link>` tag, then plain HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Marx</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/marx-css@5/css/marx.min.css">
</head>
<body>
  <main>
    <h1>Workers of the world</h1>
    <p>Plain HTML, styled automatically.</p>

    <form>
      <label for="email">Email</label>
      <input id="email" type="email" placeholder="karl@marx.de">
      <button type="submit">Subscribe</button>
    </form>
  </main>
</body>
</html>
```

`main` is the centered container. With a bundler, `import "marx-css"` loads the same stylesheet.

## Theming

The whole API is the `--marx-*` custom properties. Override them in your own unlayered CSS and your
values win: every Marx rule sits inside `:where()` in a cascade layer, at zero specificity.

```css
:root {
  --marx-primary: hotpink;
  --marx-radius: 0.75rem;
  --marx-measure: 60rem;
}
```

| Tokens | Control |
|---|---|
| `--marx-bg`, `--marx-text`, `--marx-muted`, `--marx-surface`, `--marx-border` | Page and surface colors |
| `--marx-primary`, `--marx-on-primary`, `--marx-link`, `--marx-ring`, `--marx-danger` | Brand blue, links, focus rings, error feedback |
| `--marx-font-sans`, `--marx-font-serif`, `--marx-font-mono`, `--marx-font-body` | Font stacks |
| `--marx-text-base`, `--marx-text-h1` through `--marx-text-h6` | Type scale |
| `--marx-space-2xs` through `--marx-space-xl`, `--marx-flow`, `--marx-leading` | Spacing and rhythm |
| `--marx-measure`, `--marx-radius` | Content width and corner radius |

Colors are declared with `light-dark()` under `color-scheme: light dark`, so dark mode follows the
visitor's OS with no toggle and no JavaScript. Force one scheme with `:root { color-scheme: light }`.
[`src/_tokens.css`](src/_tokens.css) lists every token and its default.

## Browser support

Chrome and Edge 123+, Firefox 120+, Safari 17.5+. Layout uses logical properties, so it works
right-to-left, and transitions sit behind `prefers-reduced-motion`. Browsers without `light-dark()`
keep the static light value of each color, losing the dark scheme but not the page.

## License

MIT

---

Crafted by [<img src="https://blode.co/avatar-circle.png" width="20" align="top" />](https://blode.co) [Matthew Blode](https://blode.co)
