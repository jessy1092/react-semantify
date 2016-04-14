
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui steps';

const Steps = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Steps;
