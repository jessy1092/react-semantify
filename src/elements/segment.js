
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const stateArray       = ['disabled', 'loading'];
const defaultClassName = 'ui segment';
const componentName    = 'Segment';

const Segment = new filter(Div)
  .colorFilter()
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Segment;
