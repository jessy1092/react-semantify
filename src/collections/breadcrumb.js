
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui breadcrumb';
const componentName    = 'Breadcrumb';

const Breadcrumb = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Breadcrumb;
