"use strict";

import React        from 'react';
import ExampleBlock from '../../components/ExampleBlock.jsx';
import PageTitle    from '../../components/PageTitle.jsx';

import {Button, Divider, Header} from 'react-semantify';

export default React.createClass({

  render() {
    return (
      <div>
        <PageTitle title="Button">
          A button indicates a possible user action
        </PageTitle>

        <div className="main container">
          <Header className="large dividing">Type</Header>

          <ExampleBlock header="Button"
                        sub="A standard button">
            <Button>Button</Button>
            <Button color="red">Red Button</Button>
            <Button color="orange">Orange Button</Button>
          </ExampleBlock>

          <Header className="large dividing">States</Header>

          <ExampleBlock header="Active"
                        sub="A button can show it is in active mode">
            <Button active={true}>Button</Button>
            <Button active={true} color="red">Red Button</Button>
            <Button active={true} color="orange">Orange Button</Button>
          </ExampleBlock>

          <Divider/>

          <ExampleBlock header="Disabled"
                        sub="A button can show it is in Disabled mode">
            <Button disabled={true}>Button</Button>
            <Button disabled={true} color="red">Red Button</Button>
            <Button disabled={true} color="orange">Orange Button</Button>
          </ExampleBlock>

          <Divider/>

          <ExampleBlock header="Loading"
                        sub="A button can show it is in Loading mode">
            <Button loading={true}>Button</Button>
            <Button loading={true} color="red">Button</Button>
            <Button loading={true} color="orange">Button</Button>
          </ExampleBlock>

        </div>
      </div>
    );
  }
});
