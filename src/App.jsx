"use strict";

import React      from 'react/addons';
import RouteStore from './stores/RouteStore.js';
import IndexPage  from './pages/IndexPage.jsx';

export default React.createClass({

  getInitialState() {
    return {
      routes: RouteStore.getAll()
    }
  },

  componentDidMount() {
    RouteStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    RouteStore.removeChangeListener(this._onChange);
  },

  render() {
    var {routes} = this.state;
    var pageIndex = -1;
    var PageComponent;

    ['Basic', 'Elements', 'Collections', 'Views', 'Modules'].forEach((key) => {
      routes[key].forEach((entry, index) => {
        if (entry.status === true) {
          pageIndex = index;
          PageComponent = entry.page;
        }
      });
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

  _onChange() {
    this.setState(RouteStore.getAll());
  }

});
