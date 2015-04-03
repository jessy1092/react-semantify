"use strict";

import gulp       from 'gulp';
import uglify     from 'gulp-uglify';
import grename    from 'gulp-rename';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import browserify from 'browserify';
import gbabel     from 'gulp-babel';

let build_path     = 'dst';
let transpile_path = 'lib';

gulp.task('transpile', () => {
  return gulp.src('./src/**/*')
    .pipe(gbabel({experimental: true}))
    .pipe(gulp.dest(transpile_path));
});

gulp.task('browserify', () => {
  return browserify(`./${transpile_path}/index_browser.js`)
    .bundle()
    .pipe(source('react-semantify.js'))
    .pipe(gulp.dest(build_path))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(grename('react-semantify.min.js'))
    .pipe(gulp.dest(build_path));
});

gulp.task('watch', (done) => {
  gulp.watch('./src/**/*', gulp.series('build'));
  done();
});

gulp.task('build', gulp.series('transpile', 'browserify'));
gulp.task('dev', gulp.series('build', 'watch'));
gulp.task('default', gulp.series('build'));
