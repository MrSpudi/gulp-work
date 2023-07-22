const gulp = require('gulp');

// SASS
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const changed = require('gulp-changed');
const rigger = require("gulp-rigger");

// Images
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');


gulp.task('clean:docs', function (done) {
	if (fs.existsSync('./docs/')) {
		return gulp
			.src('./docs/', {
				read: false
			})
			.pipe(clean({
				force: true
			}));
	}
	done();
});

const plumberNotify = (title) => {
	return {
		errorHandler: notify.onError({
			title: title,
			message: 'Error <%= error.message %>',
			sound: false,
		}),
	};
};

gulp.task('sass:docs', function () {
	return gulp
		.src('./src/scss/*.scss')
		.pipe(changed('./docs/css/'))
		.pipe(plumber(plumberNotify('SCSS')))
		.pipe(sourceMaps.init())
		.pipe(sassGlob())
		// .pipe(groupMedia())
		.pipe(sass())
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 4 versions']
		}))
		.pipe(csso())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./docs/css/'));
});

gulp.task('images:docs', function () {
	return gulp
		.src('./src/img/**/*')
		.pipe(changed('./docs/img/'))
		.pipe(webp())
		.pipe(gulp.dest('./docs/img/'))
		.pipe(gulp.src('./src/img/**/*'))
		.pipe(changed('./docs/img/'))
		.pipe(imagemin({
			verbose: true
		}))
		.pipe(gulp.dest('./docs/img/'));
});

gulp.task('fonts:docs', function () {
	return gulp
		.src('./src/fonts/**/*')
		.pipe(changed('./docs/fonts/'))
		.pipe(gulp.dest('./docs/fonts/'));
});

gulp.task('files:docs', function () {
	return gulp
		.src('./src/files/**/*')
		.pipe(changed('./docs/files/'))
		.pipe(gulp.dest('./docs/files/'));
});

gulp.task('js:docs', function () {
	return gulp
		.src('./src/js/*.js')
		.pipe(changed('./docs/js/'))
		.pipe(rigger())
		.pipe(plumber(plumberNotify('JS')))
		.pipe(gulp.dest('./docs/js/'));
});


gulp.task(
	'default',
	gulp.series(
		'clean:docs',
		gulp.parallel('sass:docs', 'images:docs', 'fonts:docs', 'files:docs', 'js:docs'),
	)
);