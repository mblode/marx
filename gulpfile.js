var gulp = require('gulp')
var plumber = require('gulp-plumber')
var rename = require('gulp-rename')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')
var sass = require('gulp-sass')
var stylus = require('gulp-stylus')
var browserSync = require('browser-sync')

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
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message)
        this.emit('end')
      }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('styl', function () {
  gulp.src(['styl/**/[^_]*.styl'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message)
        this.emit('end')
      }}))
    .pipe(stylus())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.styl'}))
    .pipe(gulp.dest('css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('styles', ['styl', 'scss'])

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('styl/**/*.styl', ['styl'])
  gulp.watch('scss/**/*.scss', ['scss'])
  gulp.watch('*.html', ['bs-reload'])
})
