import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import ColorSelector from '../mixins/colorSelector';
import TypeSelector from '../mixins/typeSelector';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui header';

const Header = React.createClass({

  mixins: [ClassGenerator, ColorSelector, TypeSelector, StateSelector],

  render: function () {

    let {className, type, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type={this.getType()}
        color={this.getColor()}
        disabled={this.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
});

export default Header;
