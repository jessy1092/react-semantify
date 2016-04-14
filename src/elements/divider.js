
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui divider';

const Divider = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Divider;
