
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui sidebar';
const componentName    = 'Sidebar';

class Basic extends React.Component {
  render() {

    const { props: { children, init, ...other } } = this;

    return (
      <div {...other} ref="sidebar">
        {children}
      </div>
    );
  }

  componentDidMount() {

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
}

const Sidebar = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Sidebar;
