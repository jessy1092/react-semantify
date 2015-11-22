import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui sticky';

const Sticky = React.createClass({

  mixins: [ClassGenerator],

  render: function () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClassName(defaultClassName)} >
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
        $(this.getDOMNode()).sticky();
      } else {
        $(this.getDOMNode()).sticky(this.props.init);
      }
    }
  }
});

export default Sticky;
