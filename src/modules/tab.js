import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';

let defaultClassName = 'ui tab';

module.exports = React.createClass({

  mixins: [ClassGenerator, StateSelector],

  render: function () {

    let {className, active, loading, tab, ...other} = this.props;

    let state = {
      active: this.getActive(),
      loading: this.getLoading()
    };

    return (
      <div {...other}
        className={this.getClassName(defaultClassName, state)}
        data-tab={tab}>
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
        $(this.getDOMNode()).tab();
      } else {
        $(this.getDOMNode()).tab(this.props.init);
      }
    }
  }
});
