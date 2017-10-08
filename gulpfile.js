var gulp, concat, autoprefixer, minify, uglify, watch, imagemin;

    gulp = require('gulp');
    concat = require('gulp-concat');
    autoprefixer = require('gulp-autoprefixer');
    minify = require('gulp-minify-css');
    uglify = require('gulp-uglify');
    watch = require('gulp-watch');
    imagemin = require('gulp-imagemin');

gulp.task('dist', [
    'scripts',
    'styles',
    'fonts',
    'watch',
    'html',
    'imagemin'
]);

gulp.task ('scripts', function(){
     gulp.src('src/js/**/*.js') //choose all js files
        .pipe (gulp.dest ('dist/js')); //put it into js folder
});
gulp.task ('imagemin', function(){
    gulp.src('src/images/*') //choose all js files
        .pipe(imagemin())
        .pipe(gulp.dest ('dist/images')); //put it into js folder
});
gulp.task ('styles', function () {
    gulp.src('src/css/**/*.css') //choose all css files
        .pipe(minify())//minify it
        .pipe(concat('main.css')) //make one css file.
        .pipe(gulp.dest ('dist/css')); //put it into css folder
});
gulp.task ('fonts', function () {
    gulp.src('src/fonts/*')
        .pipe(gulp.dest ('dist/fonts'));
});
gulp.task ('html', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest ('dist'));
});
gulp.task ('watch', function () {
    watch (['src/js/**/*.js'], function (event, cb) {
        gulp.start(['scripts']);
    });
    watch (['src/css/**/*.css'], function (event, cb) {
        gulp.start(['styles']);
    });
    watch (['src/fonts/*'], function (event, cb) {
        gulp.start(['fonts']);
    });
    watch (['src/images/*'], function (event, cb) {
        gulp.start(['imagemin']);
    });
    watch (['src/index.html'], function (event, cb) {
        gulp.start(['html']);
    });
});
