import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import ColorSelector from '../mixins/colorSelector';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'icon';

const Icon = React.createClass({

  mixins: [ClassGenerator, ColorSelector, StateSelector],

  render: function () {

    let {className, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="icon"
        color={this.getColor()}
        disabled={this.getDisabled()}
        loading={this.getLoading()}>
      </Unit>
    );
  }
});

export default Icon;
