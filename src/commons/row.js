
import React from 'react';

import filter from '../filter';
import Div    from './div';

const defaultClassName = 'row';

const Row = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Row;
