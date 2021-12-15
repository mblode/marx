// Load plugins
const browsersync = require('browser-sync').create();
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const postcssImport = require("postcss-import")
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: './',
        },
        port: 3000,
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// CSS task
function css() {
    return gulp
        .src('./src/**/[^_]*.css')
        .pipe(plumber())
        .pipe(postcss([autoprefixer(), postcssImport()]))
        .pipe(gulp.dest('css/'))
        .pipe(postcss([cssnano()]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'))
        .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
    gulp.watch('./src/**/*', css);
    gulp.watch('*.html', browserSyncReload);
}

// define complex tasks
const build = gulp.series(css);
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = build;
