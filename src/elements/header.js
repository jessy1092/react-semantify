
import React from 'react';

import filter from '../filter';
import Unit from '../commons/unit';

const stateArray       = ['disabled'];
const defaultClassName = 'ui header';
const componentName    = 'Header';

const Header = new filter(Unit)
  .typeFilter()
  .colorFilter()
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Header;
