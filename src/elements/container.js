
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui container';
const componentName    = 'Container';

const Container = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Container;
