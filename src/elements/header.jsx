"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var ColorSelector  = require('../mixins/colorSelector.js')(React);
  var TypeSelector   = require('../mixins/typeSelector.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.jsx')(React);

  var defaultClassName = 'ui header';

  var Header = React.createClass({

    mixins: [ClassGenerator, ColorSelector, TypeSelector, StateSelector],

    render: function () {

      var {className, type, color, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type={this.getType()}
          color={this.getColor()}
          disabled={this.getDisabled()}
          onClick={this.onClick}>
          {this.props.children}
        </Unit>
      );
    }
  });

  return Header;
}
