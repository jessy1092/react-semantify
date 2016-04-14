
import React from 'react';

import filter from '../filter';
import Div    from './div';

const stateArray       = ['active'];
const defaultClassName = 'content';

const Content = new filter(Div)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Content;
