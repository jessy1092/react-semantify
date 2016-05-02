
import React from 'react';

import filter from '../filter';
import Div    from './div';

const defaultClassName = 'column';
const componentName    = 'Column';

const Column = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Column;
