import React from 'react';
import ClassGenerator from '../mixins/classGenerator';
import StateSelector from '../mixins/stateSelector';

let defaultClassName = 'ui tab';

const Tab = React.createClass({

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
        data-tab={tab}
        ref="tab">
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
        $(this.refs.tab).tab();
      } else {
        $(this.refs.tab).tab(this.props.init);
      }
    }
  }
});

export default Tab;
