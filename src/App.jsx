"use strict";
var React        = require('react/addons');
var RouteStore   = require('./store/RouteStore.js');
var IndexPage    = require('./pages/IndexPage.jsx');

module.exports = React.createClass({

  getInitialState: function () {
    return {
      routes: RouteStore.getAll()
    }
  },

  componentDidMount: function () {
    RouteStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    RouteStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var {routes} = this.state;
    var pageIndex = -1;
    var PageComponent;

    routes.forEach(function (entry, index) {
      if (entry.status === true) {
        pageIndex = index;
        PageComponent = entry.page;
      }
    });

    if (pageIndex >= 0) {
      return (
        <PageComponent />
      );
    } else {
      return (
        <IndexPage />
      );
    }
  },

  _onChange: function () {
    this.setState(RouteStore.getAll());
  }

});
