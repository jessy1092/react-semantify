import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import ColorSelector from '../mixins/colorSelector';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui button';

const Button = React.createClass({

  mixins: [ClassGenerator, ColorSelector, StateSelector],

  render: function () {

    let {className, color, disabled, active, loading, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="div"
        color={this.getColor()}
        disabled={this.getDisabled()}
        active={this.getActive()}
        loading={this.getLoading()}>
        {this.props.children}
      </Unit>
    );
  }
});

export default Button;
