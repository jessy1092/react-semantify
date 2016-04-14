
import React from 'react';

import filter from '../filter';
import {Unit} from '../commons/unit';

const defaultClassName = 'ui label';

const Label = new filter(Unit)
  .typeFilter()
  .colorFilter()
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Label;
