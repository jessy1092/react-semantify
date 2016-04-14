
import React from 'react';

import filter from '../filter';

const stateArray       = ['disabled', 'loading'];
const defaultClassName = 'ui segment';

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

const Segment = new filter(Basic)
  .colorFilter()
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Segment;
