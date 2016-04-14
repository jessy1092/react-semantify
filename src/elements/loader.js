
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const stateArray       = ['disabled', 'active'];
const defaultClassName = 'ui loader';

const Loader = new filter(Div)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Loader;
