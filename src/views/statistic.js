
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui statistic';
const componentName    = 'Statistic';

const Statistic = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Statistic;
