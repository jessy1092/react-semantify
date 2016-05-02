
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui steps';
const componentName    = 'Steps';

const Steps = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Steps;
