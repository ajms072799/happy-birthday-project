const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

const minifyCSS = () => {
    return gulp.src('./css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
}

const minifyImage = () => {
    return gulp.src('./asset/image/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/image'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./css/**/*.css', minifyCSS);
    gulp.watch('./css/**/*.css').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./html/**/*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.watch = watch;
exports.minifyCSS = minifyCSS;
exports.minifyImage = minifyImage;