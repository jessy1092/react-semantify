
import React from 'react';

import filter from '../filter';

const stateArray       = ['error', 'disabled', 'active'];
const defaultClassName = 'ui dropdown';
const componentName    = 'Dropdown';

class Basic extends React.Component {
  render() {

    let { props: { className, children, init, ...other } } = this;

    if (className.indexOf('active') >= 0) {
      className += ' simple';
    }

    return (
      <div {...other} className={className} ref="dropdown" >
        {children}
      </div>
    );
  }

  componentDidMount() {

    const { props: { init = false } } = this

    if (init === false) {
      return;
    }

    if (init === true) {
      $(this.refs.dropdown).dropdown();
    } else {
      $(this.refs.dropdown).dropdown(init);
    }
  }
}

const Dropdown = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Dropdown;
