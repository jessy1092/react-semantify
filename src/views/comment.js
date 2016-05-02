
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'comment';
const componentName    = 'Comment';

const Comment = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Comment;
