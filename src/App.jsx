"use strict";
var React       = require('react/addons');
var Semantify   = require('react-semantify');
var RouteConfig = require('./RouteConfig.js');

var {Menu, Item, Header} = Semantify;

module.exports = React.createClass({

  getInitialState: function () {
    return {
      routes: RouteConfig.map(function (entry) {
        entry.status = false;
        return entry;
      })
    };
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

    routes = routes.map(function (entry, id) {
      entry.status = (id == index) ? true : false;
      return entry;
    });
    this.setState({routes});

    React.render(React.createElement(routes[index].page, null), document.getElementsByClassName('pusher')[0]);
  }

});
