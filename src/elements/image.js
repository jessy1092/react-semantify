
import React from 'react';

import filter from '../filter';

const stateArray       = ['disabled'];
const defaultClassName = 'ui image';
const componentName    = 'Image';

const Basic = (props) => <img {...props}/>;

const Image = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Image;
