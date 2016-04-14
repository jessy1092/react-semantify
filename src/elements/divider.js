
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui divider';

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

const Divider = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Divider;
