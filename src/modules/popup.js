import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui popup';

const Popup = React.createClass({

  mixins: [ClassGenerator],

  render: function () {
    return (
      <div className={this.getClassName(defaultClassName)} >
        {this.props.children}
      </div>
    );
  }
});

export default Popup;
