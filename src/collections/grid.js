
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui grid';

const Grid = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Grid;
