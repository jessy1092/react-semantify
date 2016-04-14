
import React from 'react';

import filter from '../filter';
import Unit from '../commons/unit';

const stateArray       = ['disabled', 'active', 'loading'];
const defaultClassName = 'ui button';

const Button = new filter(Unit)
  .typeFilter()
  .colorFilter()
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Button;
