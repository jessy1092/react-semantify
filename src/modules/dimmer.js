import React from 'react';
import ReactDOM from 'react-dom';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui dimmer';

const Dimmer = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, color, type, disabled, active, ...other} = this.props;

    return (
      <Unit
        className={this.getClassName(defaultClassName)}
        color="null"
        type="div"
        disabled={this.getDisabled()}
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
        $(ReactDOM.findDOMNode(this)).dimmer();
      } else {
        $(ReactDOM.findDOMNode(this)).dimmer(this.props.init);
      }
    }
  }
});

export default Dimmer;
