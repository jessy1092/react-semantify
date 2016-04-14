
import React from 'react';

import filter from '../filter';
import Div    from './div';

const defaultClassName = 'field';

const Field = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Field;
