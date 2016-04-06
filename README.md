## Marx
#### The classless CSS reset (perfect for Communists).

> No JavaScript. No Classes. Just raw *CSS.*

##Is Marx for you?
Marx is a CSS stylesheet to be used in any projects (namely small ones). If you don't need the weight of heavy frameworks or you would just like to make an edible website quickly, Marx is perfect for you. It can be used out of the minified box but it can also be customised and styled through the use of HTML classes.

##Key features
- Built atop of Sanitize.css, meaning all browsers render consistently.
- Created using the SASS preprocessors (Customise all the variables!).
- Responsive and mobile-friendly.
- Clean, beautiful typography.
- Forms, tables, buttons and navigation.
- Zero classes, so it already works with your HTML.
- Drop-dead gorgeous.
- It just works.

## [Demo](http://codepen.io/mblode/details/JdYbJj/)

## Quick Start
Several quick start options are available:

- Install with [NPM](https://www.npmjs.com/): `npm install marx-css` (recommended).
- Install with [Bower](http://bower.io): `bower install marx`.
- Use the latest Marx CDN
```
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.rawgit.com/mblode/marx/master/css/marx.min.css">
```
- [Source code.](https://cdn.rawgit.com/mblode/marx/master/css/marx.min.css)
- [Download the latest release](https://github.com/mblode/marx/archive/master.zip).
- Clone the repo: `git clone https://github.com/mblode/marx.git`.

if you have cloned the repo or downloaded from .zip, there are a few steps you must take within the terminal.

1. Change directory: `cd marx`.
2. Install node modules: `npm install`.
3. Install scss-lint Ruby gem: `gem install scss-lint`.
4. To run gulp: `gulp`.

## Running Github Pages
The gh-pages branch is built using Jekyll and must therefore be install with `gem install jekyll`.

1. Checkout in to gh-pages: `git checkout gh-pages`.
2. Install marx dependency: `bower install`.
3. Run middleman: `middleman serve`.
4. Open in browser: `localhost:4567`.

## What's Included
These are the files that are generated from `bower install marx`

```
.
├── README.md
├── LICENSE.md
├── bower.json
├── package.json
├── css
│   ├── marx.css
│   ├── marx.min.css
└── scss
    ├── _base.scss
    ├── _buttons.scss
    ├── _forms.scss
    ├── _sanitize.scss
    ├── _tables.scss
    ├── _typography.scss
    ├── _variables.scss
    └── marx.scss

```

## Documentation
### Basic HTML Template
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Marx Template</title>

  <!-- Marx CSS -->
  <link rel="stylesheet" href="css/marx.min.css">
</head>

<body>
  <!-- main is the container -->
  <main>
    <!-- Navigation -->
    <nav>
      <ul>
        <li><a href="#"><b>First</b></a></li>
        <li><a href="#">Second</a></li>
        <li><a href="#">Third</a></li>
        <li><a href="#">Fourth</a></li>
      </ul>
    </nav>

    <!-- article -->
    <article>
      <h1>Article</h1>
    </article>

    <!-- aside -->
    <aside>
      <h1>Aside</h1>
    </aside>

    <!-- section -->
    <section>
      <h1>Section</h1>
    </section>

    <!-- footer -->
    <footer>
      <p>&copy; Matthew Blode 2016</p>
    </footer>
  </main>

</body>
</html>
```

## Contributing to Marx

Pull requests are the way to go.


## Creators

**Matthew Blode**
- <https://github.com/mblode>
- <http://codepen.io/mblode>

## License
MIT © [Matthew Blode](http://matthewblode.com)
