"use strict";
var React     = require('react/addons');
var Semantify = require('react-semantify');
var SidebarButton = require('../components/SidebarButton.jsx');

var {Button} = Semantify;

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        <SidebarButton />
        <Button className="inverted" color='blue'>ButtonPage</Button>
      </div>
    );
  }
});
