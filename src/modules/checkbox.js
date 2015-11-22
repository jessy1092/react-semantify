import React from 'react';
import ReactDOM from 'react-dom';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui checkbox';

const Checkbox = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, color, type, disabled, readOnly, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        color="null"
        type="div"
        disabled={this.getDisabled()}
        readOnly={this.getReadOnly()}>
        {this.props.children}
      </Unit>
    );
  },

  componentDidMount: function () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(ReactDOM.findDOMNode(this)).checkbox();
      } else {
        $(ReactDOM.findDOMNode(this)).checkbox(this.props.init);
      }
    }
  }
});

export default Checkbox;
