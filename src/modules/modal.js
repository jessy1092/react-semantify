
import React from 'react';

import filter from '../filter';

const stateArray       = ['active'];
const defaultClassName = 'ui modal';
const componentName    = 'Modal';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <div {...other} ref="modal" >
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
      $(this.refs.modal).modal();
    } else {
      $(this.refs.modal).modal(init);
    }
  }
});

const Modal = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Modal;
