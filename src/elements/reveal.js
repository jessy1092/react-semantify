
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const stateArray       = ['disabled'];
const defaultClassName = 'ui reveal';
const componentName    = 'Reveal';

const Reveal = new filter(Div)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Reveal;
