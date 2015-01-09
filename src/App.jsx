"use strict";
var React       = require('react/addons');
var ReactRouter = require('react-router');
var Sidebar     = require('./components/SideBar.jsx');

var {RouteHandler} = ReactRouter;

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        <Sidebar />
        <div className="pusher">
          <RouteHandler />
        </div>
      </div>
    );
  }
});
