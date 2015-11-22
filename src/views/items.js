import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui items';

const Items = React.createClass({

  mixins: [ClassGenerator],

  propTypes: {
    className: React.PropTypes.string,
    type: React.PropTypes.string
  },

  render: function () {
    let type = '';

    if (typeof this.props.type != 'undefined') {
      if (this.props.type == 'link') {
        type = 'link';
      }
    }

    return (
      <div className={this.getClassName(defaultClassName, type)}>
        {this.props.children}
      </div>
    );
  }
});

export default Items;
