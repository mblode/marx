## Marx
#### The stylish CSS reset.

> No Javascript. No Classes. Just raw *CSS.*

##Key features
- Built atop of Sanitize.css, meaning all browsers render consistently.
- Responsive.
- Drop-dead gorgeous.
- Clean typography.
- Custom forms, buttons and navigation.
- 7.7 kb minified.
- It just works.

Marx aims to be a base stylesheet to be built off or to be just left raw. To edit the framework simply add classes, styles or customize variables.

## [Demo](http://codepen.io/mblode/details/JdYbJj/)

## Quick Start
Several quick start options are available:

- Install with [Bower](http://bower.io): `bower install marx` (recommended).
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
4. To run gulp server: `gulp`.
5. To run build process: `gulp build`.

## Running Github Pages
The gh-pages branch is built using Jekyll and must therefore be install with `gem install jekyll`.

1. Checkout in to gh-pages: `git checkout gh-pages`.
2. Install marx dependency: `bower install`.
3. Run jekyll: `jekyll serve`.
4. Open in browser: `localhost:4000/marx/`.


## What's Included
These are the files that are generated from `bower install marx`

```
.
├── README.md
├── bower.json
├── css
│   ├── marx.css
│   ├── marx.css.map
│   ├── marx.min.css
│   └── marx.min.css.map
└── scss
    ├── _buttons.scss
    ├── _config.scss
    ├── _forms.scss
    ├── _html.scss
    ├── _navigation.scss
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
      <p>&copy Matthew Blode 2015</p>
    </footer>
  </main>

</body>
</html>
```

## Contributing to Marx

Pull requests are the way to go.


## Creators

**Matthew Blode**
- <https://twitter.com/mblode>
- <https://github.com/mblode>
- <http://codepen.io/mblode>

## License
MIT © [Matthew Blode](http://mblode.github.io)
