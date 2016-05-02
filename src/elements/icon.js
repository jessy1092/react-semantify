
import React from 'react';

import filter from '../filter';

const stateArray       = ['disabled', 'loading'];
const defaultClassName = 'icon';
const componentName    = 'Icon';

const Basic = (props) => <i {...props}/>;

const Icon = new filter(Basic)
  .colorFilter()
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Icon;
