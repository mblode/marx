const
  browserSync = require('browser-sync'),
  gulp = require('gulp'),
  gulpAutoprefixer = require('gulp-autoprefixer'),
  gulpCleanCss = require('gulp-clean-css'),
  gulpDest = require('gulp-dest'),
  gulpPlumber = require('gulp-plumber'),
  gulpRename = require('gulp-rename'),
  gulpSass = require('gulp-sass'),
  gulpSourcemaps = require('gulp-sourcemaps'),
  gulpStylus = require('gulp-stylus')

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: './'
    }
  })
})

gulp.task('bs-reload', function () {
  browserSync.reload()
})

gulp.task('scss', function () {
  gulp.src(['scss/**/*.scss'])
    .pipe(gulpPlumber({
      errorHandler: function (error) {
        console.log(error.message)
        this.emit('end')
      }}))
    .pipe(gulpSourcemaps.init())
    .pipe(gulpSass())
    .pipe(gulpAutoprefixer())
    .pipe(gulp.dest('css/'))
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(gulpCleanCss({compatibility: 'ie8'}))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('styl', function () {
  gulp.src(['./node_modules/sanitize.css/sanitize.css'])
    .pipe(gulpDest('tmp', {ext: '.styl'}))
    .pipe(gulp.dest('./'))
  gulp.src(['styl/**/[^_]*.styl'])
    .pipe(gulpPlumber({
      errorHandler: function (error) {
        console.log(error.message)
        this.emit('end')
      }}))
    .pipe(gulpSourcemaps.init())
    .pipe(gulpStylus())
    .pipe(gulpAutoprefixer())
    .pipe(gulpRename({suffix: '.styl'}))
    .pipe(gulp.dest('css/'))
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(gulpCleanCss({compatibility: 'ie8'}))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('styles', ['scss', 'styl'])

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('scss/**/*.scss', ['scss'])
  gulp.watch('styl/**/*.styl', ['styl'])
  gulp.watch('*.html', ['bs-reload'])
})
