
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui buttons';
const componentName    = 'Buttons';

const Buttons = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Buttons;
