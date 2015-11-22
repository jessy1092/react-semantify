import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui rail';

const Rail = React.createClass({

  mixins: [ClassGenerator],

  render: function () {

    let {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClassName(defaultClassName)} >
        {this.props.children}
      </div>
    );
  }
});

export default Rail;
