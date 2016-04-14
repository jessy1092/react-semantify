
import React from 'react';

import filter from '../filter';
import Div    from './div';

const defaultClassName = 'text';

const Text = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Text;
