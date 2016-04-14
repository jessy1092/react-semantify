
import React from 'react';

import filter from '../filter';
import Div    from './div';

const stateArray       = ['active'];
const defaultClassName = 'title';

const Title = new filter(Div)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();


export default Title;
