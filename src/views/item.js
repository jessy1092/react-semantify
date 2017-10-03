
import React from 'react';

import filter from '../filter';
import Unit from '../commons/unit';

const defaultClassName = 'item';
const componentName    = 'Item';

class Basic extends React.Component {
  render() {

    const { props: { children, value, ...other } } = this;

    return (
      <Unit {...other}
        data-value={value} >
        {children}
      </Unit>
    );
  }
}

const Item = new filter(Basic)
  .typeFilter()
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Item;
