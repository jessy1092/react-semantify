
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui container';

const Container = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Container;
