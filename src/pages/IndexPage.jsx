"use strict";
var React     = require('react/addons');
var Semantify = require('react-semantify');
var SidebarButton = require('../components/SidebarButton.jsx');

var {Button, Icon} = Semantify;

module.exports = React.createClass({

  render: function () {

    return (
      <div>
        <SidebarButton />
        <Button color="red">
          <Icon className="cloud"/>
        </Button>
      </div>
    );
  }
});
