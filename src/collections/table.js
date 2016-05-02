
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui table';
const componentName    = 'Table';

const Basic = ({children, ...other}) => (
  <table {...other}>{children}</table>
);

const Table = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Table;
