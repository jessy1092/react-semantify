
import React from 'react';

import filter from '../filter';
import {Unit} from '../commons/unit';

const defaultClassName = 'item';

const Basic = React.createClass({

  render: function () {

    const { props: { children, value, type = 'div', ...other } } = this;

    return (
      <Unit {...other}
        type={type}
        data-value={value} >
        {children}
      </Unit>
    );
  }
});

const Item = new filter(Basic)
  .typeFilter()
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Item;
