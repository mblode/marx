var browserSync = require('browser-sync')
var gulp = require('gulp')
var gulpAutoprefixer = require('gulp-autoprefixer')
var gulpCleanCss = require('gulp-clean-css')
var gulpDest = require('gulp-dest')
var gulpPlumber = require('gulp-plumber')
var gulpRename = require('gulp-rename')
var gulpSass = require('gulp-sass')
var gulpStylus = require('gulp-stylus')

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
    .pipe(gulpSass())
    .pipe(gulpAutoprefixer())
    .pipe(gulp.dest('css/'))
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(gulpCleanCss({compatibility: 'ie8'}))
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
    .pipe(gulpStylus())
    .pipe(gulpAutoprefixer())
    .pipe(gulpRename({suffix: '.styl'}))
    .pipe(gulp.dest('css/'))
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(gulpCleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('styles', ['scss', 'styl'])

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('scss/**/*.scss', ['scss'])
  gulp.watch('styl/**/*.styl', ['styl'])
  gulp.watch('*.html', ['bs-reload'])
})
