import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui image';

const Image = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, type, disabled, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="img"
        color="null"
        disabled={this.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
});

export default Image;
