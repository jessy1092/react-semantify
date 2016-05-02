
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui card';
const componentName    = 'Card';

const Card = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Card;
