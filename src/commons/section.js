import React from 'react';

import filter from '../filter';
import {Unit} from './unit';

const defaultClassName = 'section';

const Section = new filter(Unit)
  .typeFilter()
  .colorFilter()
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Section;
