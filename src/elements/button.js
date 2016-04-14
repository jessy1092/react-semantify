
import React from 'react';

import filter from '../filter';
import {Unit} from '../commons/unit';

const stateArray       = ['disabled', 'active', 'loading'];
const defaultClassName = 'ui button';

const Basic = React.createClass({

  render: function () {

    const { props: { children, type = 'div', ...other } } = this;

    return (
      <Unit {...other} type={type}>
        {children}
      </Unit>
    );
  }
});

const Button = new filter(Basic)
  .typeFilter()
  .colorFilter()
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Button;
