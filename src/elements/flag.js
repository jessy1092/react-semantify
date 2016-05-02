
import React from 'react';

import filter from '../filter';

const defaultClassName = 'flag';
const componentName    = 'Flag';

const Basic = (props) => <i {...props}/>;

const Flag = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Flag;
