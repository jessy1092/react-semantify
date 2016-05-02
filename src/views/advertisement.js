
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui ad';
const componentName    = 'Ad';

const Ad = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Ad;
