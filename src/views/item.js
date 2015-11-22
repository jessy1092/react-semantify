import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import TypeSelector from '../mixins/typeSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'item';

const Item = React.createClass({

  mixins: [ClassGenerator, TypeSelector],

  render: function () {

    let {className, type, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type={this.getType()}
        color="null"
        value={this.props.value} >
        {this.props.children}
      </Unit>
    );
  }
});

export default Item;
