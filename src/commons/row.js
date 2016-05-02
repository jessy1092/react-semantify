
import React from 'react';

import filter from '../filter';
import Div    from './div';

const defaultClassName = 'row';
const componentName    = 'Row';

const Row = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Row;
