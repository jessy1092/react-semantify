import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui divider';

module.exports = React.createClass({

  mixins: [ClassGenerator],

  render: function () {
    return (
      <div className={this.getClassName(defaultClassName)}>
        {this.props.children}
      </div>
    );
  }
});
