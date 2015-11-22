import React from 'react';
import ReactDOM from 'react-dom';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';
import {Unit} from '../commons/unit';

let defaultClassName = 'ui dropdown';

const Dropdown = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, color, type, error, disable, active, ...other} = this.props;

    if (this.getActive() || this.getDisabled()) {
      defaultClassName += ' simple';
    }

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        color="null"
        type="div"
        error={this.getError()}
        disable={this.getDisabled()}
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
        $(ReactDOM.findDOMNode(this)).dropdown();
      } else {
        $(ReactDOM.findDOMNode(this)).dropdown(this.props.init);
      }
    }
  }
});

export default Dropdown;
