"use strict";
var React     = require('react/addons');
var Semantify = require('react-semantify');
var SidebarButton = require('../components/SidebarButton.jsx');

var {Button, Divider, Header, Segment} = Semantify;

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        <Segment className="header">
          <div className="container">
            <Header className="huge">
              Button
              <Header className="sub">A button indicates a possible user action</Header>
            </Header>
            <Divider />
          </div>
        </Segment>
        <div className="container">
          <Header className="large dividing">Basic</Header>
          <Header className="small" >
            Button
            <Header className="sub">A standard button</Header>
          </Header>
        </div>
        <SidebarButton />
      </div>
    );
  }
});
