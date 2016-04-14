
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui statistic';

const Statistic = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Statistic;
