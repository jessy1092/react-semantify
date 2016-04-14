
import React from 'react';

import filter from '../filter';
import {Unit} from '../commons/unit';

const stateArray       = ['disabled', 'active'];
const defaultClassName = 'ui loader';

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

const Loader = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Loader;
