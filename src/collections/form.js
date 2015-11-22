import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui form';

const Form = React.createClass({

  mixins: [ClassGenerator],

  render: function () {

    let {className, ...other} = this.props;

    return (
      <form {...other} className={this.getClassName(defaultClassName)} >
        {this.props.children}
      </form>
    );
  }
});

export default Form;
