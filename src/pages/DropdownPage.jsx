"use strict";

import React        from 'react/addons';
import Semantify    from 'react-semantify';
import ExampleBlock from '../components/ExampleBlock.jsx';
import CodeBlock    from '../components/CodeBlock.jsx';
import PageTitle    from '../components/PageTitle.jsx';

var {Dropdown, Divider, Header, Icon, Item, Menu, Text} = Semantify;

export default React.createClass({

  render() {
    return (
      <div>
        <PageTitle title="Dropdown">
          A dropdown allows a user to select a value from a list
        </PageTitle>

        <div className="main container">
          <Header className="large dividing">Usage</Header>
          {'Use CommonJS'}
          <CodeBlock language="js">{"var Dropdown = require('react-semantify').Dropdown;"}</CodeBlock>
          {'or use ES6'}
          <CodeBlock language="js">{"import {Dropdown} from 'react-semantify';"}</CodeBlock>

          <Header className="large dividing">Initialize</Header>
          {'It would call Sementic-ui init function when element in the componentDidMount life cycle. '}
          {'You also can use init={param} to transfer parameter. '}
          {'You can see '}
          <Item type="link"
                href="//semantic-ui.com/modules/dropdown.html#/usage"
                target="_blank">
            {'Sementic-ui Usage'}
          </Item>
          {' for more detail'}

          <ExampleBlock header="Initialize"
                        sub="Use to initialize simple dropdown">
            <Dropdown init={true}>
              <Text>Dropdown</Text>
              <Icon className="dropdown"/>
              <Menu>
                <Item>Choose1</Item>
                <Item>Choose2</Item>
              </Menu>
            </Dropdown>
          </ExampleBlock>

          <Divider/>

          <ExampleBlock header="Changing Transitions"
                        sub="A dropdown can specify a different transitions">
            <Dropdown init={{transition: 'scale'}}>
              <Text>Dropdown</Text>
              <Icon className="dropdown"/>
              <Menu>
                <Item>Choose1</Item>
                <Item>Choose2</Item>
              </Menu>
            </Dropdown>
          </ExampleBlock>

          <Header className="large dividing">Type</Header>

          <ExampleBlock header="Dropdown"
                        sub="A standard dropdown">
            <Dropdown init={true}>
              <Text>Shop</Text>
              <Icon className="dropdown"/>
              <Menu>
                <Header>Categories</Header>
                <Item>Clothing</Item>
                <Item>Home Goods</Item>
                <Item>Bedroom</Item>
                <Divider/>
                <Header>Order</Header>
                <Item>Status</Item>
                <Item>Cancellations</Item>
              </Menu>
            </Dropdown>
          </ExampleBlock>

          <Header className="large dividing">States</Header>

          <ExampleBlock header="Error"
                        sub="A errored dropdown alert a user to a problem">
            <Dropdown init={true} error={true}>
              <Text>Dropdown</Text>
              <Icon className="dropdown"/>
              <Menu>
                <Item>Choose1</Item>
                <Item>Choose2</Item>
              </Menu>
            </Dropdown>
          </ExampleBlock>

          <Divider/>

          <ExampleBlock header="Disabled"
                        sub="A disabled dropdown will not open or close its menu">
            <Dropdown init={true} disabled={true}>
              <Text>Dropdown</Text>
              <Icon className="dropdown"/>
              <Menu>
                <Item>Choose1</Item>
                <Item>Choose2</Item>
              </Menu>
            </Dropdown>
          </ExampleBlock>

          <Divider/>

          <ExampleBlock header="Active"
                        sub="An active dropdown has its menu open">
            <Dropdown init={true} active={true}>
              <Text>Dropdown</Text>
              <Icon className="dropdown"/>
              <Menu>
                <Item>Choose1</Item>
                <Item>Choose2</Item>
              </Menu>
            </Dropdown>
          </ExampleBlock>

        </div>
      </div>
    );
  }
})
