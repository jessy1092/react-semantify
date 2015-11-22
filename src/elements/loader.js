import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui loader';

const Loader = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="div"
        color="null"
        disabled={this.getDisabled()}
        active={this.getActive()}>
        {this.props.children}
      </Unit>
    );
  }
});

export default Loader;
