require! <[gulp gulp-util gulp-livereload gulp-uglify gulp-rename]>
require! <[vinyl-source-stream vinyl-buffer browserify reactify]>

build_path = 'dst'
source     = vinyl-source-stream
buffer     = vinyl-buffer
uglify     = gulp-uglify
rename     = gulp-rename

reactifyES6 = (file) ->
  reactify file, {+es6}

gulp.task 'browserify', ->
  browserify './src/index_browser.js'
    .transform reactifyES6
    .bundle!
    .pipe source 'react-semantify.js'
    .pipe gulp.dest "#{build_path}/"
    .pipe buffer!
    .pipe uglify!
    .pipe rename 'react-semantify.min.js'
    .pipe gulp.dest "#{build_path}/"

gulp.task 'watch', ->
  gulp-livereload.listen silent: true
  gulp.watch ['./src/**/*', './index.jsx'], <[browserify]> .on \changed, gulp-livereload.changed

gulp.task 'build', <[browserify]>
gulp.task 'dev', <[build watch]>
gulp.task 'default', <[build]>
