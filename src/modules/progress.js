
import React from 'react';

import filter from '../filter';

const stateArray       = ['active', 'success', 'warning', 'error', 'disabled'];
const defaultClassName = 'ui progress';
const componentName    = 'Progress';

class Basic extends React.Component {
  render() {

    const { props: { children, percent, value, total, init, ...other } } = this;

    return (
      <div {...other}
        data-percent={percent}
        data-value={value}
        data-total={total}
        ref="progress" >
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
      $(this.refs.progress).progress();
    } else {
      $(this.refs.progress).progress(init);
    }
  }
}

const Progress = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Progress;
