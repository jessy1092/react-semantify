import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui accordion';

const Accordion = React.createClass({

  mixins: [ClassGenerator],

  render: function () {
    return (
      <div className={this.getClassName(defaultClassName)} ref="accordion">
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
        $(this.refs.accordion).accordion();
      } else {
        $(this.refs.accordion).accordion(this.props.init);
      }
    }
  }
});

export default Accordion;
