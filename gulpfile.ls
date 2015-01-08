require! <[gulp gulp-util gulp-livereload gulp-jade gulp-plumber]>
require! <[express connect-livereload path]>
require! <[vinyl-source-stream browserify reactify]>

app = express!
build_path = '_public'
reactifyES6 = (file) ->
  reactify file, {+es6}

gulp.task 'jade', ->
  gulp.src './client/index.jade'
    .pipe gulp-plumber!
    .pipe gulp-jade!
    .pipe gulp.dest "#{build_path}"

gulp.task 'images', ->
  gulp.src './client/images/*'
    .pipe gulp.dest "#{build_path}/images/"

gulp.task 'data', ->
  gulp.src './client/data/*'
    .pipe gulp.dest "#{build_path}/data/"

gulp.task 'css', ->
  gulp.src './client/styles/*.css'
    .pipe gulp.dest "#{build_path}/styles/"

gulp.task 'browserify', ->
  browserify './client/scripts/index.js'
    .transform reactifyES6
    .bundle!
    .pipe vinyl-source-stream 'bundle.js'
    .pipe gulp.dest "#{build_path}/scripts/"

gulp.task 'server', ->
  app.use connect-livereload!
  app.use express.static path.resolve "#{build_path}"
  app.listen 3000
  gulp-util.log 'listening on port 3000'

gulp.task 'watch', ->
  gulp-livereload.listen silent: true
  gulp.watch './client/index.jade', <[jade]> .on \change, gulp-livereload.changed
  gulp.watch './client/data/*', <[data]> .on \change, gulp-livereload.changed
  gulp.watch './client/styles/*.css', <[css]> .on \change, gulp-livereload.changed
  gulp.watch './client/scripts/**/*', <[browserify]> .on \changed, gulp-livereload.changed

gulp.task 'build', <[jade browserify css]>
gulp.task 'dev', <[build server watch]>
gulp.task 'default', <[build]>
