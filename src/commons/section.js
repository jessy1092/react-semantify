import React from 'react';

import filter from '../filter';
import {Unit} from './unit';

const defaultClassName = 'section';

const Basic = React.createClass({

  render: function () {

    const { props: { children, type = 'div', ...other } } = this;

    return (
      <Unit {...other} type={type} >
        {this.props.children}
      </Unit>
    );
  }
});

const Section = new filter(Basic)
  .typeFilter()
  .colorFilter()
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Section;
