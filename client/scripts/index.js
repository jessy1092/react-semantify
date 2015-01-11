"use strict";
var $    = require('jquery');
global.$ = global.jQuery = $;
require('semantic-ui/dist/semantic.js');

var React     = require('react/addons');
var App       = require('../../src/App.jsx');
var IndexPage = require('../../src/pages/IndexPage.jsx');

// Router.run(AppRouter, function (Handler) {
//   React.render(<Handler/>, document.body);
// })

React.render(<App />, document.getElementsByClassName('ui sidebar')[0]);
React.render(<IndexPage />, document.getElementsByClassName('pusher')[0]);
