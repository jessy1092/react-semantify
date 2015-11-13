"use strict"

let babel = require('babel-core');

module.exports = {
  process: function (src, filename) {

    if (filename.indexOf('node_modules') === -1 && babel.util.canCompile(filename)) {
      var option = {
        filename: filename,
        presets: ['es2015', 'react', 'stage-0'],
        retainLines: true
      }
      return babel.transform(src, option).code;
    }
    return src;
  }
};
