
import React from 'react';

import filter from '../filter';
import Div    from './div';

const defaultClassName = 'text';
const componentName    = 'Text';

const Text = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Text;
