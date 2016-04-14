
import React from 'react';

import filter from '../filter';
import Div    from './div';

const defaultClassName = 'fields';

const Fields = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Fields;
