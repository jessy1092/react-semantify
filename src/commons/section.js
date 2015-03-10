"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var ColorSelector  = require('../mixins/colorSelector.js')(React);
  var TypeSelector   = require('../mixins/typeSelector.js')(React);
  var Unit           = require('../commons/unit.js')(React);

  var defaultClassName = 'section';

  var Section = React.createClass({

    mixins: [ClassGenerator, ColorSelector, TypeSelector],

    render: function () {

      var {className, color, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type={this.getType()}
          color={this.getColor()} >
          {this.props.children}
        </Unit>
      );
    }
  });

  return Section;
}
