import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui accordion';

module.exports = React.createClass({

  mixins: [ClassGenerator],

  render: function () {
    return (
      <div className={this.getClassName(defaultClassName)}>
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
        $(this.getDOMNode()).accordion();
      } else {
        $(this.getDOMNode()).accordion(this.props.init);
      }
    }
  }
});
