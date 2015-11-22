import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import {Unit} from '../commons/unit';

let defaultClassName = 'flag';

const Flag = React.createClass({

  mixins: [ClassGenerator],

  render: function () {

    let {className, type, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="icon"
        color="null">
      </Unit>
    );
  }
});

export default Flag;
