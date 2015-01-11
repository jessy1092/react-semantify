"use strict"
var React     = require('react/addons');
var Semantify = require('react-semantify');

var {Button, Icon} = Semantify;

module.exports = React.createClass({

  render: function () {

    return (
      <Button className="big right attached" color="black" onClick={this._onClick}>
        <Icon className="content" />
      </Button>
    );
  },

  _onClick: function () {
    $('.ui.sidebar').sidebar('show');
  }
});
