
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui items';
const componentName    = 'Items';

const Basic = React.createClass({

  render: function () {

    let { props: { className, children, type = '', ...other } } = this;

    if (type === 'link') {
      className += ' link';
    }

    return (
      <div {...other} className={className}>
        {children}
      </div>
    );
  }
});

const Items = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Items;
