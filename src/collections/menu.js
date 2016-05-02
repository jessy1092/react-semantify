
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui menu';
const componentName    = 'Menu';

const Menu = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Menu;
