
import React from 'react';

import filter from '../filter';

const stateArray       = ['active'];
const defaultClassName = 'title';

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

const Title = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();


export default Title;
