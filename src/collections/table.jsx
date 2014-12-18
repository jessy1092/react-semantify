"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui table';

  var Table = React.createClass({

    mixins: [ClassGenerator],

    render: function () {

      var {className, ...other} = this.props;

      return (
        <table {...other} className={this.getClassName(defaultClassName)} >
          {this.props.children}
        </table>
      );
    }
  });

  return Table;
}
