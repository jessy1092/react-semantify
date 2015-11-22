"use strict";

import React     from 'react';
import ReactDOM  from 'react-dom';
import CodeBlock from './CodeBlock.jsx';
import Semantify from 'react-semantify';

var {Content, Icon, Header, Segment, Label} = Semantify;

export default React.createClass({

  getInitialState() {
    return {
      code: false
    }
  },

  componentDidMount() {

    var iconNode = ReactDOM.findDOMNode(this.refs.icon);

    $(iconNode).popup();
    $(iconNode).mouseleave(() => {
      $(iconNode).popup('remove popup');
    });
  },

  render() {

    var {onClick, className} = this.props;

    return (
      <div {...this.props} className="example block">
        <Header className="small" >
          <Icon type="link"
                className="code"
                onClick={this._onClick}
                data-content="View Source"
                data-variation="inverted"
                ref="icon"/>
          <Content>
            {this.props.header}
            <Header className="sub">{this.props.sub}</Header>
          </Content>
        </Header>
        {this._render()}
      </div>
    );
  },

  _render() {

    if (this.state.code) {
      return (
        <Segment className="top attached">
          <Label className="top attached">Example</Label>
          <CodeBlock language="html">
            {this.props.children}
          </CodeBlock>
        </Segment>
      );
    } else {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  },

  _onClick() {
    var code;
    code = !this.state.code;
    this.setState({code});
  }
})
