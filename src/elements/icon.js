
import React from 'react';

import filter from '../filter';

const stateArray       = ['disabled', 'loading'];
const defaultClassName = 'icon';

const Basic = (props) => <i {...props}/>;

const Icon = new filter(Basic)
  .colorFilter()
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Icon;
