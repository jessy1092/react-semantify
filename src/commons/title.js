import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import Unit from './unit';

let defaultClassName = 'title';

module.exports = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, type, color, active, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="div"
        color="null"
        active={this.getActive()}>
        {this.props.children}
      </Unit>
    );
  }
});
