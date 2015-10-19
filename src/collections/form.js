"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui form';

  var Form = React.createClass({

    mixins: [ClassGenerator],

    render: function () {

      var {className, ...other} = this.props;

      return (
        <form {...other} className={this.getClassName(defaultClassName)} >
          {this.props.children}
        </form>
      );
    }
  });

  return Form;
}
