
import React from 'react';

import filter from '../filter';
import {Unit} from '../commons/unit';

const defaultClassName = 'ui label';

const Basic = React.createClass({

  render: function () {

    const { props: { children, type = 'div', ...other } } = this;

    return (
      <Unit {...other} type={type} >
        {children}
      </Unit>
    );
  }
});

const Label = new filter(Basic)
  .typeFilter()
  .colorFilter()
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Label;
