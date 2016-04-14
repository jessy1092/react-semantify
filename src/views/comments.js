
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui comments';

const Comments = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Comments;
