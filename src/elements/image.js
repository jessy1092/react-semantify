
import React from 'react';

import filter from '../filter';

const stateArray       = ['disabled'];
const defaultClassName = 'ui image';

const Basic = (props) => <img {...props}/>;

const Image = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Image;
