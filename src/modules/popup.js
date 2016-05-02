
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui popup';
const componentName    = 'Popup';

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

const Popup = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Popup;
