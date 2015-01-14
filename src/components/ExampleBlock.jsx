"use strict";
var React = require('react/addons');
var CodeBlock = require('./CodeBlock.jsx');
var Semantify = require('react-semantify');

var {Content, Icon, Header, Segment, Label} = Semantify;

module.exports = React.createClass({

  getInitialState: function () {
    return {
      code: false
    }
  },

  componentDidMount: function () {

    var iconNode = this.getDOMNode().querySelectorAll('.icon.code');

    $(iconNode[0]).popup();
    $(iconNode[0]).mouseleave(function () {
      $(iconNode[0]).popup('remove popup');
    });
  },

  render: function () {

    var {onClick, className, ...other} = this.props;

    return (
      <div className="example block" {...other}>
        <Header className="small" >
          <Icon type="link"
                className="code"
                onClick={this._onClick}
                data-content="View Source"
                data-variation="inverted"></Icon>
          <Content>
            {this.props.header}
            <Header className="sub">{this.props.sub}</Header>
          </Content>
        </Header>
        {this._render()}
      </div>
    );
  },

  _render: function () {

    if (this.state.code) {
      return (
        <Segment className="top attached">
          <Label className="top attached">Example</Label>
          <CodeBlock language="html">
            {this.props.codeBlock}
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

  _onClick: function () {
    var code;
    code = !this.state.code;
    this.setState({code});
  }
})
