"use strict"
var React     = require('react/addons');
var Link      = require('react-router').Link;
var Semantify = require('react-semantify');

var {Sidebar, Item} = Semantify;

module.exports = React.createClass({

  render: function () {

    return (
      <Sidebar className="left vertical inverted menu" init="show">
        <Item><Link to="index">IndexPage</Link></Item>
        <Item><Link to="button">Button</Link></Item>
      </Sidebar>
    );
  }
});
