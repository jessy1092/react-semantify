import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import ColorSelector from '../mixins/colorSelector';
import TypeSelector from '../mixins/typeSelector';
import {Unit} from './unit';

let defaultClassName = 'section';

const Section = React.createClass({

  mixins: [ClassGenerator, ColorSelector, TypeSelector],

  render: function () {

    let {className, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type={this.getType()}
        color={this.getColor()} >
        {this.props.children}
      </Unit>
    );
  }
});

export default Section;
