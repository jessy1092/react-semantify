
import React from 'react';

import filter from '../filter';
import Div    from './div';

const defaultClassName = 'fields';
const componentName    = 'Fields';

const Fields = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Fields;
