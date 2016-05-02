
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui shape';
const componentName    = 'Shape';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <div {...other} ref="shape">
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
      $(this.refs.shape).shape();
    } else {
      $(this.refs.shape).shape(init);
    }
  }
});

const Shap = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Shap;
