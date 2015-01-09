"use strict";
var React       = require('react/addons');
var ReactRouter = require('react-router');
var App         = require('./App.jsx');
var IndexPage   = require('./pages/IndexPage.jsx');
var ButtonPage  = require('./pages/ButtonPage.jsx');

var {Route, NotFoundRoute, DefaultRoute} = ReactRouter;

var routes = (
  <Route name="index" path="/" handler={App}>
    <Route name="button" handler={ButtonPage}/>
    <NotFoundRoute handler={IndexPage}/>
    <DefaultRoute handler={IndexPage}/>
  </Route>
);


module.exports = routes;
