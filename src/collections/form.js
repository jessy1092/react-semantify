
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui form';
const componentName    = 'Form';

const Form = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Form;
