
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui sticky';
const componentName    = 'Sticky';

class Basic extends React.Component {
  render() {

    const { props: { children, init, ...other } } = this;

    return (
      <div {...other} ref="sticky" >
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
      $(this.refs.sticky).sticky();
    } else {
      $(this.refs.sticky).sticky(init);
    }
  }
}

const Sticky = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Sticky;
