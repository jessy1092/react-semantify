"use strict";
var $    = require('jquery');
global.$ = global.jQuery = $;
require('semantic-ui/dist/semantic.js');

var React        = require('react/addons');
var Sidebar      = require('../../src/components/Sidebar.jsx');
var RouteActions = require('../../src/actions/RouteActions.js');
var App          = require('../../src/App.jsx');
// var IndexPage = require('../../src/pages/IndexPage.jsx');

var pathName = location.hash.substring(2);

React.render(<Sidebar />, document.getElementsByClassName('ui sidebar')[0]);
React.render(<App />, document.getElementsByClassName('pusher')[0]);

// React.render(<IndexPage />, document.getElementsByClassName('pusher')[0]);

RouteActions.updatePath(pathName);
