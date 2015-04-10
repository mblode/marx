var gulp = require('gulp');
var $g = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('scss-lint', function(){
  return gulp.src('scss/**/*.scss')
    .pipe($g.scssLint());
});

gulp.task('sass', ['scss-lint'], function() {
  return gulp.src('scss/*.scss')
    .pipe($g.sourcemaps.init())
      .pipe($g.sass({
        precision: 10,
        onError: console.error.bind(console, 'Sass error:')
      }))
      .pipe($g.autoprefixer(['last 2 versions, > 5%'], {
        cascade: true
      }))
    .pipe($g.sourcemaps.write('.'))
    .pipe(gulp.dest('css/'));
});

gulp.task('css-min', ['sass'], function() {
  return gulp.src(['css/*.css', '!css/*.min.css'])
  .pipe($g.sourcemaps.init())
    .pipe($g.minifyCss())
    .pipe($g.rename({
      suffix: '.min'
    }))
  .pipe($g.sourcemaps.write('.'))
  .pipe(gulp.dest('css/'));
});

gulp.task('serve', ['scss-lint', 'sass', 'css-min'], function() {

  browserSync({
    server: './'
  });

  gulp.watch('scss/**/*.scss', ['sass', 'css-min', reload]);
  gulp.watch('*.html').on('change', reload);
});

gulp.task('default', ['serve']);

gulp.task('build', ['scss-lint', 'sass', 'css-min']);
