
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui table';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <table {...other} >
        {children}
      </table>
    );
  }
});

const Table = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Table;
