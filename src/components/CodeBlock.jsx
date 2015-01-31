"use strict";

import React from 'react/addons';
import Highlight from 'highlight.js';

export default React.createClass({

  componentDidMount() {
    this._highlightCode();
  },

  componentDidUpdate() {
    this._highlightCode();
  },

  render() {
    return (
      <pre><code className={this.props.language}>
        {this.props.children}
      </code></pre>
    )
  },

  _highlightCode() {

    var codeNodes = this.getDOMNode().querySelectorAll('pre code');

    if (codeNodes.length > 0)
    {
      Highlight.highlightBlock(codeNodes[0]);
    }
  }
})
