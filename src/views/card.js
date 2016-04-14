
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui card';

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

const Card = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Card;
