import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui table';

const Table = React.createClass({

  mixins: [ClassGenerator],

  render: function () {

    let {className, ...other} = this.props;

    return (
      <table {...other} className={this.getClassName(defaultClassName)} >
        {this.props.children}
      </table>
    );
  }
});

export default Table;
