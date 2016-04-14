
import React from 'react';

import filter from '../filter';

const stateArray       = ['active', 'completed', 'disabled'];
const defaultClassName = 'step';

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

const Step = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Step;
