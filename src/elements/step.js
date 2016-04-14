
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const stateArray       = ['active', 'completed', 'disabled'];
const defaultClassName = 'step';

const Step = new filter(Div)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Step;
