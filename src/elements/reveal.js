
import React from 'react';

import filter from '../filter';

const stateArray       = ['disabled'];
const defaultClassName = 'ui reveal';

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

const Reveal = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Reveal;
