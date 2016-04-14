
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui rail';

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

const Rail = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Rail;
