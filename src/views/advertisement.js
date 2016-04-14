
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui ad';

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

const Ad = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Ad;
