
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui accordion';
const componentName    = 'Accordion';

class Basic extends React.Component {
  render() {

    const { props: { children, init, ...other } } = this;

    return (
      <div {...other} ref="accordion">
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
      $(this.refs.accordion).accordion();
    } else {
      $(this.refs.accordion).accordion(init);
    }
  }
}

const Accordion = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Accordion;
