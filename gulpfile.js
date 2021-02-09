const { dest, on } = require('gulp');
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

const minifyCSS = () => {
    return gulp.src('./css/main.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
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