"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var ColorSelector = require('../mixins/colorSelector.js')(React);
  var Unit = require('../commons/unit.jsx')(React);

  var defaultClassName = 'ui segment';

  var Segment = React.createClass({

    mixins: [ClassGenerator, ColorSelector],

    render: function () {

      var {className, color, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="div"
          color={this.getColor()}>
        </Unit>
      );
    }
  });

  return Segment;
}
