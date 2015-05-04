## Marx
#### The classless CSS framework (perfect for Communists).

> No Javacript. No Classes. Just raw *CSS.*

##Key features
- Built atop of Sanitize.css.
- Clean typography.
- Custom forms, buttons and navigation.
- Responsive.
- Drop-dead gorgeous.
- 7.7 kb minified.

## About the name
![Karl Marx](http://upload.wikimedia.org/wikipedia/commons/a/a2/Marx_old.jpg)
> Karl Marx was a German philosopher who created the socialist worldview known as Marxism. It was a structure where everyone was equal.

This framework aims to be a base to be built off or to be just left raw. To edit the framework simply add classes, styles or customize variables. Oh, and did I mention that it is almost as beautiful as Karl Marx himself.

## [Demo](http://codepen.io/mblode/full/MwWgyW/)

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

  <!-- Marx -->
  <link href="css/marx.min.css" rel="stylesheet">
</head>

<body>
  <!-- main is the container -->
  <main>
    <!-- Navigation -->
    <nav>
      <!-- left align (brand) -->
      <ul>
        <li><a href="#"><b>Marx</b></a></li>
      </ul>

      <!-- right align -->
      <ol>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ol>
    </nav>

    <!-- article -->
    <article>
      <h1>Article<small>This spans 60%</small></h1>
    </article>

    <!-- aside -->
    <aside>
      <h1>Aside<small>This spans 40%</small></h1>
    </aside>

    <!-- section -->
    <section>
      <h1>Section<small>This spans 100%</small></h1>
    </section>
  </main>

  <!-- footer (outside of main) -->
  <footer>
    <p>&copy Matthew Blode 2015</p>
  </footer>

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
