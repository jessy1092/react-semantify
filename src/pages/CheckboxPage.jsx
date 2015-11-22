"use strict";

import React        from 'react';
import ExampleBlock from '../components/ExampleBlock.jsx';
import CodeBlock    from '../components/CodeBlock.jsx';
import PageTitle    from '../components/PageTitle.jsx';

import {
  Checkbox, Divider, Header, Item
} from 'react-semantify';

export default React.createClass({

  render() {
    return (
      <div>
        <PageTitle title="Checkbox">
          A checkbox allows a user to select a value from a small set of options
        </PageTitle>

        <div className="main container">
          <Header className="large dividing">Usage</Header>
          {'Use CommonJS'}
          <CodeBlock language="js">{"var Checkbox = require('react-semantify').Checkbox;"}</CodeBlock>
          {'or use ES6'}
          <CodeBlock language="js">{"import {Checkbox} from 'react-semantify';"}</CodeBlock>

          <Header className="large dividing">Initialize</Header>
          {'It would call Sementic-ui init function when element in the componentDidMount life cycle. '}
          {'You also can use init={param} to transfer parameter. '}
          {'You can see '}
          <Item type="link"
                href="//semantic-ui.com/modules/checkbox.html#/usage"
                target="_blank">
            {'Sementic-ui Usage'}
          </Item>
          {' for more detail'}

          <ExampleBlock header="Initialize"
                        sub="Use to initialize simple checkbox">
            <Checkbox init={true}>
              <input type="checkbox"/>
              <label>Checkbox</label>
            </Checkbox>
          </ExampleBlock>

          <Divider/>

          <ExampleBlock header="Uncheckable Checkboxes"
                        sub="To make a user able to check a box, but unable to uncheck it">
            <Checkbox init={{uncheckable: false}}>
              <input type="checkbox"/>
              <label>Uncheckable Checkbox</label>
            </Checkbox>
          </ExampleBlock>

          <Header className="large dividing">Type</Header>

          <ExampleBlock header="Checkbox"
                        sub="A standard checkbox">
            <Checkbox init={true}>
              <input type="checkbox"/>
              <label>The Simple Checkbox</label>
            </Checkbox>
          </ExampleBlock>

          <Header className="large dividing">States</Header>

          <ExampleBlock header="Read-only"
                        sub="A checkbox can be read-only and cannot change states">
            <Checkbox init={true} readOnly={true}>
              <input type="checkbox"/>
              <label>The Read Only Checkbox</label>
            </Checkbox>
          </ExampleBlock>

          <Divider/>

          <ExampleBlock header="Disabled"
                        sub="A checkbox can be Disabled. You should add disabled props in <input>, too">
            <Checkbox init={true} disabled={true}>
              <input disabled="disabled" type="checkbox"/>
              <label>The Disabled Checkbox</label>
            </Checkbox>
          </ExampleBlock>

        </div>
      </div>
    );
  }
})
