"use strict";
var React = require('react/addons');
var highlight = require('highlight.js');
var Semantify = require('react-semantify');

var {Content, Icon, Header, Segment, Label} = Semantify;

module.exports = React.createClass({

  getInitialState: function () {
    return {
      code: false
    }
  },

  componentDidMount: function () {
    if (this.state.code) {
      this._highlightCode();
    }

    var iconNode = this.getDOMNode().querySelectorAll('.icon.code');

    $(iconNode[0]).popup();
    $(iconNode[0]).mouseleave(function () {
      $(iconNode[0]).popup('remove popup');
    });
  },

  componentDidUpdate: function () {
    if (this.state.code) {
      this._highlightCode();
    }
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
          <pre><code className="html">
            {this.props.codeBlock}
          </code></pre>
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
  },

  _transferToHTML:function () {
    var codeNodes = this.getDOMNode().querySelectorAll('pre code');

    return codeNodes[0].innerHTML;
  },

  _highlightCode: function () {

    var codeNodes = this.getDOMNode().querySelectorAll('pre code');

    if (codeNodes.length > 0)
    {
      highlight.highlightBlock(codeNodes[0]);
    }
  }
})
