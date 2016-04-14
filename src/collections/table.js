
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui table';

const Basic = ({children, ...other}) => (
  <table {...other}>{children}</table>
);

const Table = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Table;
