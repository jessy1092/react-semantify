import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import ColorSelector from '../mixins/colorSelector';
import TypeSelector from '../mixins/typeSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui label';

const Label = React.createClass({

  mixins: [ClassGenerator, ColorSelector, TypeSelector],

  render: function () {

    let {className, type, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type={this.getType()}
        color={this.getColor()}>
        {this.props.children}
      </Unit>
    );
  }
});

export default Label;
