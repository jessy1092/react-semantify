
import React from 'react';

import filter from '../filter';

const stateArray = ['disabled', 'readOnly'];
const defaultClassName = 'ui checkbox';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <div {...other} ref="checkbox">
        {children}
      </div>
    );
  },

  componentDidMount: function () {

    const { props: { init = false } } = this;

    if (init === false) {
      return;
    }

    if (init === true) {
      $(this.refs.checkbox).checkbox();
    } else {
      $(this.refs.checkbox).checkbox(init);
    }
  }
});

const Checkbox = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Checkbox;
