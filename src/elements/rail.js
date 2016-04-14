
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui rail';

const Rail = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Rail;
