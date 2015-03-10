"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var ColorSelector  = require('../mixins/colorSelector.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.js')(React);

  var defaultClassName = 'ui segment';

  var Segment = React.createClass({

    mixins: [ClassGenerator, ColorSelector, StateSelector],

    render: function () {

      var {className, color, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="div"
          color={this.getColor()}
          disabled={this.getDisabled()}
          loading={this.getLoading()}>
        </Unit>
      );
    }
  });

  return Segment;
}
