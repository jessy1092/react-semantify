"use strict";

var $ = require('jquery');

global.$ = global.jQuery = $;
require('semantic-ui/dist/semantic.js');

var React = require('react/addons');
var Router = require('react-router');
var AppRouter = require('../../src/AppRouter.jsx');

Router.run(AppRouter, function (Handler) {
  React.render(<Handler/>, document.body);
})
