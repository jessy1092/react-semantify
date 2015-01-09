"use strict";
var React     = require('react/addons');
var Semantify = require('react-semantify');

var {Button, Icon} = Semantify;

module.exports = React.createClass({

  render: function () {

    return (
      <Button color="red">
        <Icon className="cloud"/>
      </Button>
    );
  }
});
