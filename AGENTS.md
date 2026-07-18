# AGENTS.md — marx-css

Marx is a **classless CSS framework**: beautiful defaults for raw, semantic HTML
with zero classes. Shipped as the npm package `marx-css` and a CDN stylesheet.
There is no JavaScript and no build output beyond CSS.

## Repo layout

```
src/            authored partials (edit here)
  marx.css      entry: declares @layer order + @imports each partial into a layer
  _tokens.css   marx.base   — the --marx-* theming API (light-dark() dark mode)
  _preflight.css marx.base  — cross-browser reset
  _base.css     marx.content — body, layout, dialog/popover, details
  _typography.css marx.content — headings, text, links, code, mark, kbd
  _tables.css   marx.content
  _buttons.css  marx.forms
  _form.css     marx.forms
css/            BUILD OUTPUT, committed — marx.css, marx.min.css, .map
index.html      HTML5 test page (open in a browser to eyeball changes)
docs/           GitHub Pages site (docs/index.html), uses css/marx.min.css
```

## Commands

```bash
npm run build     # bundle src/ -> css/marx.css + css/marx.min.css (Lightning CSS)
npm run lint      # oxlint
npm run format    # oxfmt --write .   (scope to changed files)
npm test          # runs the test script
```

## Architecture conventions (enforced, not optional)

- **Cascade layers**: everything lives in `@layer marx.base, marx.content, marx.forms`.
  Layered rules lose to any unlayered author CSS, so users override Marx for free.
- **Zero specificity**: every selector is wrapped in `:where(...)`. Pseudo-elements
  (`::placeholder`, `::file-selector-button`) can't sit inside `:where()` — keep them
  bare, attached to a `:where()` subject.
- **Tokens only**: never hardcode a color/size — reference a `--marx-*` custom property
  from `_tokens.css`. Need a value that has no token? Add the token, don't inline it.
- **Logical properties**: `margin-block-start`, `padding-inline`, `inline-size`,
  `text-align: start` — never physical `left`/`right`/`top`/`bottom`.
- **One-directional rhythm**: block elements space with `margin-block-start` only,
  never `margin-block-end`. Preflight zeroes margins, so don't re-zero.
- **Focus**: `:focus-visible { outline: 2px solid var(--marx-ring); outline-offset: 2px }`.
  Never `outline: none`.
- **Motion**: wrap every `transition`/`animation` in
  `@media (prefers-reduced-motion: no-preference)`.
- **No `!important`** (one sanctioned exception: preflight's `[hidden]`).
- **No vendor prefixes** — Lightning CSS (browserslist `defaults`) adds them.

## Release flow

Changesets-driven, OIDC publish (no npm token in CI):

1. `npm run changeset` and commit the generated `.changeset/*.md`.
2. Merge to `main`. The changesets action opens/updates a **Version Packages** PR.
3. Merge that PR — CI publishes to npm via OIDC and tags the release.

## Gotchas

- **After editing anything in `src/`, run `npm run build`** — `css/` artifacts are
  committed and consumed by CDN users; a stale `css/` ships broken styles.
- **Keep `css/` paths stable** (`css/marx.min.css`). CDN URLs and `docs/` are pinned
  to them; renaming breaks every consumer.
- Run `format` scoped to your changes — don't let it churn unrelated files.
