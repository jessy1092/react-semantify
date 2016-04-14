
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const stateArray       = ['disabled'];
const defaultClassName = 'ui reveal';

const Reveal = new filter(Div)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Reveal;
