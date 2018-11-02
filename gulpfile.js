'use strict';

const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');
const sass = require('gulp-sass');
const del = require('del');

const TS_SRC = './ts/**/*.ts';
const SASS_SRC = './sass/**/*.scss';

const JS_DIST = './js/';
const CSS_DIST = './css/';

gulp.task('clean', function () {
    del([JS_DIST, CSS_DIST]);
});

gulp.task('webpack', function () {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest(JS_DIST));
});

gulp.task('gulp-sass', function () {
    return gulp
        .src(SASS_SRC)
        .pipe(sass())
        .pipe(gulp.dest(CSS_DIST));
});

gulp.task('watch', function () {
    gulp
        .watch(TS_SRC, ['webpack'])
        .watch(SASS_SRC, ['gulp-sass']);
});

gulp.task('default', ['webpack', 'gulp-sass']);
