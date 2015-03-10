"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var ColorSelector  = require('../mixins/colorSelector.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.js')(React);

  var defaultClassName = 'icon';

  var Icon = React.createClass({

    mixins: [ClassGenerator, ColorSelector, StateSelector],

    render: function () {

      var {className, color, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="icon"
          color={this.getColor()}
          disabled={this.getDisabled()}
          loading={this.getLoading()}>
        </Unit>
      );
    }
  });

  return Icon;
}

