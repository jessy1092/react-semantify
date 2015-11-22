import React from 'react';
import ReactDOM from 'react-dom';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui modal';

const Modal = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, color, type, active, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        color="null"
        type="div"
        active={this.getActive()}>
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
        $(ReactDOM.findDOMNode(this)).modal();
      } else {
        $(ReactDOM.findDOMNode(this)).modal(this.props.init);
      }
    }
  }
});

export default Modal;
