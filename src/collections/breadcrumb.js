
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui breadcrumb';

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

const Breadcrumb = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Breadcrumb;
