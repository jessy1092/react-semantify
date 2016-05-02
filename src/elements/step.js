
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const stateArray       = ['active', 'completed', 'disabled'];
const defaultClassName = 'step';
const componentName    = 'Step';

const Step = new filter(Div)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Step;
