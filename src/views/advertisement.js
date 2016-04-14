
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui ad';

const Ad = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Ad;
