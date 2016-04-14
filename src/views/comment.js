
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'comment';

const Comment = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Comment;
