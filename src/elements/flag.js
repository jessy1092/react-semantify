
import React from 'react';

import filter from '../filter';

const defaultClassName = 'flag';

const Basic = (props) => <i {...props}/>;

const Flag = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Flag;
