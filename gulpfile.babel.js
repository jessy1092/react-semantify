import gulp       from 'gulp';
import uglify     from 'gulp-uglify';
import grename    from 'gulp-rename';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import browserify from 'browserify';
import gbabel     from 'gulp-babel';
import globalShim from 'browserify-global-shim';

let build_path     = 'dst';
let transpile_path = 'lib';

gulp.task('transpile', () => {
  return gulp.src('./src/**/*')
    .pipe(gbabel({presets: ['es2015', 'react', 'stage-0']}))
    .pipe(gulp.dest(transpile_path));
});

gulp.task('browserify', () => {
  return browserify('./src/index.js', {standalone: 'Semantify'})
    .transform('babelify', {presets: ['es2015', 'react', 'stage-0']})
    .transform(globalShim.configure({
      'react': 'React',
      'react-dom': 'ReactDOM'
    }))
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
