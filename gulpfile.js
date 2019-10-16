'use strict';

const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const gulp = require('gulp');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = composer(uglifyes, composer);
const zip = require('gulp-zip');

gulp.task('clean', () => del(['minified']));

gulp.task('styles', function () {
    return gulp.src('./@(catalog|learn|lesson|profiles)/*.css')
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest('./minified'))
});

gulp.task('scripts', function () {
    return gulp.src('./@(catalog|learn|lesson|profiles)/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./minified'))
});

gulp.task('copy', function () {
    return gulp.src(['./@(resources)/*', './LICENSE', './manifest.json'])
        .pipe(gulp.dest('./minified'))
});

gulp.task('zip', function () {
    return gulp.src('./minified/**')
        .pipe(zip('Codecademy_Improved.zip'))
        .pipe(gulp.dest('./'))
});

gulp.task('default', gulp.series('clean', 'copy', 'styles', 'scripts', 'zip', 'clean'));

