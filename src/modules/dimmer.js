
import React from 'react';

import filter from '../filter';

const stateArray       = ['disabled', 'active'];
const defaultClassName = 'ui dimmer';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <div {...other} ref="dimmer">
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
      $(this.refs.dimmer).dimmer();
    } else {
      $(this.refs.dimmer).dimmer(init);
    }
  }
});

const Dimmer = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Dimmer;
