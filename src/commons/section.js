import React from 'react';

import filter from '../filter';
import Unit from './unit';

const defaultClassName = 'section';
const componentName    = 'Section';

const Section = new filter(Unit)
  .typeFilter()
  .colorFilter()
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Section;
