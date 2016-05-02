
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui divider';
const componentName    = 'Divider';

const Divider = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Divider;
