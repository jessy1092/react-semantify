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
    let {type, ...other} = this.props;

    if (typeof type !== 'undefined') {
      if (type !== 'link') {
        type = '';
      }
    }

    return (
      <div {...other} className={this.getClassName(defaultClassName, type)}>
        {this.props.children}
      </div>
    );
  }
});

export default Items;
