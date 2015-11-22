import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui sidebar';

const Sidebar = React.createClass({

  mixins: [ClassGenerator],

  render: function () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClassName(defaultClassName)} ref="sidebar">
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
        $(this.refs.sidebar).sidebar();
      } else {
        $(this.refs.sidebar).sidebar(this.props.init);
      }
    }
  }
});

export default Sidebar;
