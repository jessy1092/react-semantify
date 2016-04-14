
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui statistic';

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

const Statistic = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Statistic;
