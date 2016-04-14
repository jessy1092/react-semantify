
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui form';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <form {...other} >
        {children}
      </form>
    );
  }
});

const Form = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Form;
