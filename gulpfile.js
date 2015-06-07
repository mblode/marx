var gulp = require('gulp');
var g = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

function isStylus() {
  var stylus = false;
  for(var i = 0; i < process.argv.length; i++) {
    if(process.argv[i] == "stylus") {
      stylus = true;
    }
  }
  return stylus;
}

gulp.task('browser-sync', ['scss', 'styl'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('scss-lint', function(){
  if(!isStylus()) {
    return gulp.src('scss/**/*.scss')
      .pipe(g.scssLint());
  }
});

gulp.task('scss', ['scss-lint'], function() {
  if(!isStylus()) {
    return gulp.src('scss/*.scss')
      .pipe(g.sourcemaps.init())
        .pipe(g.sass({
          precision: 10,
          onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(g.autoprefixer('last 2 versions'))
        .pipe(g.minifyCss())
        .pipe(g.rename({suffix: '.min'}))
      .pipe(g.sourcemaps.write('.'))
      .pipe(browserSync.reload({stream:true}))
      .pipe(gulp.dest('css/'));
  }
});

gulp.task('styl-lint', function(){
  if(isStylus()) {
    return gulp.src('styl/**/*.styl')
      .pipe(g.stylint({config: '.stylintrc'}));
  }
});

gulp.task('styl', ['styl-lint'], function() {
  if(isStylus()) {
    return gulp.src('styl/marx.styl')
      .pipe(g.sourcemaps.init())
        .pipe(g.stylus())
        .pipe(g.autoprefixer('last 2 versions'))
        .pipe(g.minifyCss())
        .pipe(g.rename({suffix: '.min'}))
      .pipe(g.sourcemaps.write('.'))
      .pipe(browserSync.reload({stream:true}))
      .pipe(gulp.dest('css/'));
  }

});

gulp.task('watch', function() {
  if(isStylus()) {
    gulp.watch('styl/**/*.styl', ['styl', reload]);
  } else {
    gulp.watch('scss/**/*.scss', ['scss', reload]);
  }
  gulp.watch('*.html').on('change', reload);
});

gulp.task('default', ['scss-lint', 'scss', 'browser-sync', 'watch']);

gulp.task('stylus', ['styl-lint', 'styl', 'browser-sync', 'watch']);

gulp.task('build', ['scss-lint', 'scss', 'styl-lint', 'styl']);