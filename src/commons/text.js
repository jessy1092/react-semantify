
import React from 'react';

import filter from '../filter';

const defaultClassName = 'text';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <div {...other} >
        {this.props.children}
      </div>
    );
  }
});

const Text = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Text;
