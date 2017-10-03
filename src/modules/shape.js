
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui shape';
const componentName    = 'Shape';

class Basic extends React.Component {
  render() {

    const { props: { children, init, ...other } } = this;

    return (
      <div {...other} ref="shape">
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
      $(this.refs.shape).shape();
    } else {
      $(this.refs.shape).shape(init);
    }
  }
}

const Shap = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Shap;
