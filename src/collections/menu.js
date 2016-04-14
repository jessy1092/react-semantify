
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui menu';

const Menu = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Menu;
