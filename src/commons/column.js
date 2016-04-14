
import React from 'react';

import filter from '../filter';

const defaultClassName = 'column';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <div {...other} >
        {children}
      </div>
    );
  }
});

const Column = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Column;
