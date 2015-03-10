"use strict"

var babel = require('babel-core');

module.exports = {
  process: function (src, filename) {

    if (filename.indexOf('node_modules') === -1 && babel.canCompile(filename)) {
      var option = {
        filename: filename,
        experimental: true
      }
      return babel.transform(src, option).code;
    }
    return src;
  }
};
