"use strict";

import React from 'react/addons';
import Highlight from 'highlight.js';
import ReactToJsx from 'react-to-jsx';

export default React.createClass({

  componentDidMount() {
    this._highlightCode();
  },

  componentDidUpdate() {
    this._highlightCode();
  },

  render() {

    let displayString = '';

    if (typeof this.props.children == 'string') {
      displayString = this.props.children;
    } else {
      displayString = ReactToJsx(this.props.children);
    }

    return (
      <pre><code className={this.props.language}>
        {displayString}
      </code></pre>
    )
  },

  _highlightCode() {

    let codeNodes = this.getDOMNode().querySelectorAll('pre code');

    if (codeNodes.length > 0)
    {
      Highlight.highlightBlock(codeNodes[0]);
    }
  }
})
