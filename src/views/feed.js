
import React from 'react';

import filter from '../filter';
import Div    from '../commons/div';

const defaultClassName = 'ui feed';

const Feed = new filter(Div)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Feed;
