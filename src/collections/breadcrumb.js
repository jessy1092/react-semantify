
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui breadcrumb';

const Breadcrumb = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Breadcrumb;
