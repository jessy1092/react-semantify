"use strict";

import React     from 'react';
import CodeBlock from '../components/CodeBlock.jsx';
import PageTitle from '../components/PageTitle.jsx';

import {
  Button, Content, Divider, Header,
  Icon, Items, Item, List
} from 'react-semantify';

export default React.createClass({

  render() {

    return (
      <div>
        <PageTitle title="React-Semantify">
          Integrate Semantic-ui with react components
        </PageTitle>

        <div className="main container">
          <Header className="large dividing">
            Getting Started
          </Header>

          <Header className="medium dividing" >
            Prerequisites
          </Header>
          <p>{"The react-semantify's Dependencies"}</p>

          <List className="bulleted">
            <Item type="link"
                  href="//nodejs.org"
                  target="_blank">
              node
            </Item>
            <Item type="link"
                  href="//facebook.github.io/react"
                  target="_blank">
              react
            </Item>
            <Item type="link"
                  href="//semantic-ui.com"
                  target="_blank">
              semantic-ui
            </Item>
          </List>

          <Header className="medium" >
            Install
          </Header>
          <Divider />

          <CodeBlock language="bash">{"npm install react-semantify"}</CodeBlock>

          <p>or</p>

          <Item type="link"
                href="//github.com/jessy1092/react-semantify/releases"
                target="_blank">
            download
          </Item>

          <Header className="medium" >
            Usage
          </Header>
          <Divider />

          <Header className="small">With Browserify or Webpack</Header>

          <CodeBlock language="js">
            {["import React from 'react'; ",
             "import ReactDOM from 'react-dom'; ",
             "import {Button} from 'react-semantify'; ",
             "",
             "let HelloBox = React.createClass({ ",
             "  _onClick: function () { ",
             "    console.log('hello world!'); ",
             "  }, ",
             "",
             "  render: function () { ",
             "    return ( ",
             "      <Button color=\"red\" onClick={this._onClick}> ",
             "        Hello World! ",
             "      </Button> ",
             "    ); ",
             "  } ",
             "}); ",
             "",
             "React.render( ",
             "  <HelloBox />, ",
             "  document.getElementById('content') ",
             ");"].join('\n')}
          </CodeBlock>

          <p>And then use browserify or webpack to bundle code.</p>

          <Header className="small">In Browser</Header>

          <CodeBlock language="html">
            {["<div id=\"content\"></div>",
             "<script type=\"text/babel\">",
             "  let Button = Semantify.Button;",
             "",
             "  let HelloBox = React.createClass({",
             "    _onClick: function () {",
             "      console.log('hello world!');",
             "    },",
             "",
             "    render: function () {",
             "      return (",
             "        <Button color=\"red\" onClick={this._onClick}>",
             "          Hello World!",
             "        </Button>",
             "      );",
             "    }",
             "  });",
             "",
             "  ReactDOM.render(",
             "    <HelloBox />,",
             "    document.getElementById('content')",
             "  );",
             "</script>"].join('\n')}
          </CodeBlock>

          <p>You should include dependencies in browser.</p>

          <List className="bulleted">
            <Item>jQuery</Item>
            <Item>Semantic-UI</Item>
            <Item>React</Item>
            <Item>ReactDOM </Item>
            <Item>Babel (If you write jsx in browser.)</Item>
          </List>

          <CodeBlock language="html">
            {['<script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.min.js"></script>',
              '<script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.min.js"></script>',
              '<script src="//cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js"></script>',
              '<script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>',
              '<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.2.0/semantic.min.css">',
              '<script src="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.2.0/semantic.min.js"></script>',
              '<script src="/vendors/react-semantify.js"></script>'].join('\n')}
          </CodeBlock>

        </div>

      </div>
    );
  }
});
