"use strict";

import React        from 'react';
import Semantify    from 'react-semantify';
import ExampleBlock from '../components/ExampleBlock.jsx';
import CodeBlock    from '../components/CodeBlock.jsx';
import PageTitle    from '../components/PageTitle.jsx';

var {Divider, Header, Item, Rating} = Semantify;

export default React.createClass({

  render() {
    return (
      <div>
        <PageTitle title="Rating">
          A rating indicates user interest status
        </PageTitle>

        <div className="main container">
          <Header className="large dividing">Usage</Header>
          {'Use CommonJS'}
          <CodeBlock language="js">{"var Rating = require('react-semantify').Rating;"}</CodeBlock>
          {'or use ES6'}
          <CodeBlock language="js">{"import {Rating} from 'react-semantify';"}</CodeBlock>

          <Header className="large dividing">Initialize</Header>
          {'It would call Sementic-ui init function when element in the componentDidMount life cycle. '}
          {'You also can use init={param} to transfer parameter. '}
          {'You can see '}
          <Item type="link"
                href="//semantic-ui.com/modules/rating.html#/usage"
                target="_blank">
            {'Sementic-ui Usage'}
          </Item>
          {' for more detail'}

          <ExampleBlock header="Initialize"
                        sub="Use to initialize simple rating">
            <Rating init={true} maxRating="3"/>
          </ExampleBlock>

          <ExampleBlock header="Default Rating"
                        sub="A rating can initialize the default rating through init={param}">
            <Rating init={{initialRating: 3, maxRating: 5}}/>
          </ExampleBlock>

          <ExampleBlock header="Default Rating with properties"
                        sub="A rating can initialize the default rating with properties">
            <Rating init={true} rating="3" maxRating="5"/>
          </ExampleBlock>

          <Header className="large dividing">Type</Header>

          <ExampleBlock header="Rating"
                        sub="A standard rating">
            <Rating init={true} maxRating="5"/>
          </ExampleBlock>
        </div>
      </div>
    );
  }
})
