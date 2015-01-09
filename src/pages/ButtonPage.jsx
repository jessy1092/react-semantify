"use strict";
var React     = require('react/addons');
var Semantify = require('react-semantify');

var {Button} = Semantify;

module.exports = React.createClass({

  render: function () {
    return (
      <Button className="inverted" color='blue'>ButtonPage</Button>
    );
  }
});
