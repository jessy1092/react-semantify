
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const stateArray       = ['disabled', 'active'];
const defaultClassName = 'ui loader';
const componentName    = 'Loader';

const Loader = new filter(Div)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Loader;
