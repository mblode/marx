// Load plugins
const path = require('path');
const browsersync = require('browser-sync').create();
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const stylus = require('gulp-stylus');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const dest = require('gulp-dest');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const merge = require('merge-stream');

// BrowserSync
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: './'
		},
		port: 3000
	});
	done();
}

// BrowserSync Reload
function browserSyncReload(done) {
	browsersync.reload();
	done();
}

// SCSS task
function scss() {
	return gulp
		.src('./scss/**/[^_]*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({ includePaths: [ path.resolve(__dirname, 'node_modules') ] }))
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(gulp.dest('css/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(cleanCss({ compatibility: 'ie8' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('css/'))
		.pipe(browsersync.stream());
}

// SCSS task
function styl() {
	var sanitize = gulp
		.src(['./node_modules/sanitize.css/sanitize.css'])
		.pipe(dest('styl', { ext: '.styl' }))
		.pipe(rename({ prefix: '_' }))
		.pipe(gulp.dest('./'));

	var compile = gulp
		.src(['styl/**/[^_]*.styl'])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(rename({ suffix: '.styl' }))
		.pipe(gulp.dest('css/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(cleanCss({ compatibility: 'ie8' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('css/'))
		.pipe(browsersync.stream());

	return merge(sanitize, compile);
}

// Watch files
function watchFiles() {
	gulp.watch('./scss/**/*', scss);
	gulp.watch('./styl/**/*', styl);
	gulp.watch('*.html', browserSyncReload);
}

// define complex tasks
const build = gulp.series(gulp.parallel(scss, styl));
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.scss = scss;
exports.styl = styl;
exports.build = build;
exports.watch = watch;
exports.default = build;
