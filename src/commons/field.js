
import React from 'react';

import filter from '../filter';
import Div    from './div';

const defaultClassName = 'field';
const componentName    = 'Field';

const Field = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Field;
