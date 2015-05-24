var gulp = require('gulp');
var g = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('browser-sync', ['styles'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('scss-lint', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(g.scssLint());
});

gulp.task('styles', ['scss-lint'], function() {
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
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['styles', reload]);
  gulp.watch('*.html').on('change', reload);
});

gulp.task('default', ['scss-lint', 'styles', 'browser-sync', 'watch']);

gulp.task('build', ['scss-lint', 'styles']);
