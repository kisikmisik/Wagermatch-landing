"use strict"

// const sass = require('gulp-sass'); // more lite version


// function compileSass(done) {
//     src('src/scss/app.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(dest('src/css'));
//    done();
// }
  
// function watchSass() {
//     watch('src/scss/app.scss', compileSass);
//  }
//  exports.watchSass = watchSass

const gulp = require('gulp');
// const sass = require('gulp-sass');
var sass = require('gulp-sass')(require('sass'));

const browserSync = require('browser-sync').create();
//compile scss into css
function style() {
    return gulp.src('src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
           baseDir: "./src",
           index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style)
    gulp.watch('src/*.html').on('change',browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;