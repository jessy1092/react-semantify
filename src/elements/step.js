import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'step';

const Step = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="div"
        color="null"
        active={this.getActive()}
        completed={this.getCompleted()}
        disabled={this.getDisabled()}>
        {this.props.children}
      </Unit>
    );
  }
});

export default Step;
