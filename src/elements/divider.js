import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui divider';

const Divider = React.createClass({

  mixins: [ClassGenerator],

  render: function () {
    return (
      <div {...this.props} className={this.getClassName(defaultClassName)}>
        {this.props.children}
      </div>
    );
  }
});

export default Divider;
