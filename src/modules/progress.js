import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';

let defaultClassName = 'ui progress';

const Progress = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {
      className,
      percent, value, total,
      active, success, warning, error, disabled,
      ...other
    } = this.props;

    let state = {
      active: this.getActive(),
      success: this.getSuccess(),
      warning: this.getWarning(),
      error: this.getError(),
      disabled: this.getDisabled()
    };

    return (
      <div {...other}
        className={this.getClassName(defaultClassName, state)}
        data-percent={percent}
        data-value={value}
        data-total={total}
        ref="progress">
        {this.props.children}
      </div>
    );
  },

  componentDidMount: function () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(this.refs.progress).progress();
      } else {
        $(this.refs.progress).progress(this.props.init);
      }
    }
  }
});

export default Progress;
