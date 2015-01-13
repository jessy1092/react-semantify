"use strict";
var React       = require('react/addons');
var Semantify   = require('react-semantify');
var RouteStore  = require('../stores/RouteStore.js');
var RouteActions = require('../actions/RouteActions.js');

var {Menu, Item, Header} = Semantify;

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
    return (
      <Item>
        <div className="menu">
          <Header className="small inverted">Elements</Header>
          {this.renderElements()}
        </div>
      </Item>
    );
  },

  renderElements: function () {
    return (
      this.state.routes.map(function (entry, index) {
        return (
          <Item type="link"
                href={'#/' + entry.name}
                active={entry.status}
                onClick={this._onClick.bind(this, index)}>
            {entry.name}
          </Item>
        );
      }.bind(this))
    );
  },

  _onClick: function (index) {
    var {routes} = this.state;
    RouteActions.updatePath(routes[index].name);
  },

  _onChange: function () {
    this.setState(RouteStore.getAll());
  }

});
