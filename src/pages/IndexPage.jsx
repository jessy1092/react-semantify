"use strict";
var React     = require('react/addons');
var Semantify = require('react-semantify');
var SidebarButton = require('../components/SidebarButton.jsx');

var {Button, Content, Divider, Header, Icon, Items, Item, Segment} = Semantify;

module.exports = React.createClass({

  render: function () {

    return (
      <div>
        <Segment className="header">
          <div className="container">
            <Header className="huge">
              React-Semantify
              <Header className="sub">Integrate Semantic-ui with react components</Header>
            </Header>
            <Divider />
          </div>
        </Segment>
        <div className="container">
          <Header className="large dividing">Elements</Header>
          <Items type="link">
            <Item>
              <Content>
                <Header>Button</Header>
                <div classN="description">A standard button. Contain </div>
              </Content>
            </Item>
          </Items>

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
