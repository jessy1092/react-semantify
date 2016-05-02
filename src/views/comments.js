
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui comments';
const componentName    = 'Comments';

const Comments = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Comments;
