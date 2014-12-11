"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var ColorSelector  = require('../mixins/colorSelector.js')(React);
  var Unit           = require('../commons/unit.jsx')(React);

  var defaultClassName = 'icon';

  var Icon = React.createClass({

    mixins: [ClassGenerator, ColorSelector],

    render: function () {

      var {className, color, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="icon"
          color={this.getColor()} >
        </Unit>
      );
    }
  });

  return Icon;
}

