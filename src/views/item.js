
import React from 'react';

import filter from '../filter';
import {Unit} from '../commons/unit';

const defaultClassName = 'item';

const Basic = React.createClass({

  render: function () {

    const { props: { children, value, ...other } } = this;

    return (
      <Unit {...other}
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
