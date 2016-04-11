import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui popup';

const Popup = React.createClass({

  mixins: [ClassGenerator],

  render: function () {
    let {children, ...other} = this.props;

    return (
      <div {...other} className={this.getClassName(defaultClassName)} >
        {this.props.children}
      </div>
    );
  }
});

export default Popup;
