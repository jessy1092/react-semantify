import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui input';

const Input = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, ...other} = this.props;

    if (typeof this.props.children != 'undefined') {
      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="div"
          color="null"
          loading={this.getLoading()}
          focus={this.getFocus()}
          error={this.getError()}>
          {this.props.children}
        </Unit>
      );
    } else {
      return (
        <Unit
          className={this.getClassName(defaultClassName)}
          type="div"
          color="null"
          loading={this.getLoading()}
          focus={this.getFocus()}
          error={this.getError()}>
          <input {...other}
            placeholder={this.props.placeholder}
            type={this.props.type}/>
        </Unit>
      )
    }

  }
});

export default Input;
