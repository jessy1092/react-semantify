require! <[gulp gulp-util gulp-livereload]>
require! <[express path ]>
require! <[vinyl-source-stream browserify glob karma liveify reactify]>
require! <[child_process]>

build_path = 'dst'
reactifyES6 = (file) ->
  reactify file, {+es6}

gulp.task 'browserify:test', ->
  testFiles = glob.sync './test/spec/*.ls'
  browserify testFiles
    .transform liveify
    .bundle!
    .pipe vinyl-source-stream 'bundle-test.js'
    .pipe gulp.dest "./test/spec/"

gulp.task 'test',<[browserify:test]>, (callback)->
  # karma.server.start { configFile: './test/karma.conf.js' }
  karmaCmd = './node_modules/karma/bin/karma'
  karmaConfig = './test/karma.conf.js'
  exec "#{karmaCmd} start #{karmaConfig}", (err, stdout, stderr)->
    gulp-util.log stdout
    gulp-util.log stderr
    callback err

gulp.task 'browserify', ->
  browserify './src/index_browser.js'
    .transform reactifyES6
    .bundle!
    .pipe vinyl-source-stream 'react-semantify.js'
    .pipe gulp.dest "#{build_path}/"

gulp.task 'watch', ->
  gulp-livereload.listen silent: true
  gulp.watch ['./src/**/*', './index.jsx'], <[browserify]> .on \changed, gulp-livereload.changed

gulp.task 'build', <[browserify]>
gulp.task 'dev', <[build watch]>
gulp.task 'default', <[build]>
