
import React from 'react';

import filter from '../filter';
import Div    from './div';

const defaultClassName = 'column';

const Column = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Column;
