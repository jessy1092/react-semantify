import gulp       from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import concat       from 'gulp-concat';
import gutil      from 'gulp-util';
import livereload from 'gulp-livereload';
import jade       from 'gulp-jade';
import plumber    from 'gulp-plumber';
import uglify     from 'gulp-uglify';
import gulpif     from 'gulp-if';

import express    from 'express';
import connect    from 'connect-livereload';
import livereact  from 'livereactload';
import path       from 'path';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';

import browserify from 'browserify';
import babelify   from 'babelify';
import watchify   from 'watchify';

let app = express();

let BUILD_PATH = '_public';

let production = false;

if (gutil.env.env === 'production') {
  production = true;
}

let vendor = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/semantic-ui/dist/semantic.js',
];

let dependencies = [
  'highlight.js',
  'flux',
  'react',
  'react-dom'
];

gulp.task('jade', () => {
  return gulp.src('./client/index.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(`${BUILD_PATH}`))
    .pipe(livereload());
});

gulp.task('css', () => {
  return gulp.src('./client/styles/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest(`${BUILD_PATH}/styles/`))
    .pipe(livereload());
});

gulp.task('vendor', () => {
  return gulp.src(vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulpif(production, uglify()))
    .pipe(gulp.dest(`${BUILD_PATH}/scripts/`));
});

gulp.task('browserify-dependencies', () => {
  return browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('vendor.bundle.js'))
    .pipe(gulpif(production, buffer()))
    .pipe(gulpif(production, uglify()))
    .pipe(gulp.dest(`${BUILD_PATH}/scripts/`));
});

let bundler = browserify('./client/scripts/index.js', {
  transform: [[babelify, {presets: ["es2015", "react", "stage-0"]}]],
  plugin: production ? [] : [livereact],
  debug: !production,
  fullPaths: !production
});

gulp.task('browserify', () => {
  return bundler
    .external(dependencies)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulpif(production, buffer()))
    .pipe(gulpif(production, uglify()))
    .pipe(gulp.dest(`${BUILD_PATH}/scripts/`));
});

gulp.task('watch-js', () => {
  let watcher = watchify(bundler);
  return watcher
    .on('error', gutil.log)
    .on('update', () => {
      gutil.log('Update JS bundle');
      watcher
        .external(dependencies)
        .bundle()
        .on('error', gutil.log)
        .pipe(source('bundle.js'))
        .pipe(gulpif(production, buffer()))
        .pipe(gulpif(production, uglify()))
        .pipe(gulp.dest(`${BUILD_PATH}/scripts/`));
    });
});

gulp.task('server', () => {
  app.use(connect());
  app.use(express.static(path.resolve(`${BUILD_PATH}`)));
  app.listen(3000);
  gutil.log('listening on port 3000');
});

gulp.task('watch', () => {
  livereload.listen({start: true})
  gulp.watch('./client/index.jade', ['jade']);
  gulp.watch('./client/styles/*.css', ['css']);
});

gulp.task('bundle', ['vendor', 'browserify-dependencies', 'browserify']);
gulp.task('build', ['jade', 'bundle', 'css']);
gulp.task('dev', ['build', 'server', 'watch', 'watch-js']);
gulp.task('default', ['build']);
