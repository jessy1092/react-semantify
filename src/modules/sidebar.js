
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui sidebar';
const componentName    = 'Sidebar';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <div {...other} ref="sidebar">
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
      $(this.refs.sidebar).sidebar();
    } else {
      $(this.refs.sidebar).sidebar(init);
    }
  }
});

const Sidebar = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Sidebar;
