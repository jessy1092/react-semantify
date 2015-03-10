"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var Unit           = require('../commons/unit.js')(React);

  var defaultClassName = 'flag';

  var Flag = React.createClass({

    mixins: [ClassGenerator],

    render: function () {

      var {className, type, color, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="icon"
          color="null">
        </Unit>
      );
    }
  });

  return Flag;
}
