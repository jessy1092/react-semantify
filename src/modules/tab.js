
import React from 'react';

import filter from '../filter';

const stateArray       = ['active', 'loading'];
const defaultClassName = 'ui tab';
const componentName    = 'Tab';

class Basic extends React.Component {
  render() {

    const { props: { children, tab, init, ...other } } = this;

    return (
      <div {...other}
        data-tab={tab}
        ref="tab">
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
      $(this.refs.tab).tab();
    } else {
      $(this.refs.tab).tab(init);
    }
  }
}

const Tab = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Tab;
