
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui message';
const componentName    = 'Message';

const Message = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Message;
