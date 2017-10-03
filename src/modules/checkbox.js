
import React from 'react';

import filter from '../filter';

const stateArray       = ['disabled', 'readOnly'];
const defaultClassName = 'ui checkbox';
const componentName    = 'Checkbox';

class Basic extends React.Component {
  render() {

    const { props: { children, init, ...other } } = this;

    return (
      <div {...other} ref="checkbox">
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
      $(this.refs.checkbox).checkbox();
    } else {
      $(this.refs.checkbox).checkbox(init);
    }
  }
}

const Checkbox = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Checkbox;
