"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var ColorSelector  = require('../mixins/colorSelector.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.jsx')(React);

  var defaultClassName = 'ui button';

  var Button = React.createClass({

    mixins: [ClassGenerator, ColorSelector, StateSelector],

    render: function () {

      var {className, color, disabled, active, loading, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="div"
          color={this.getColor()}
          disabled={this.getDisabled()}
          active={this.getActive()}
          loading={this.getLoading()}
          onClick={this.onClick}>
          {this.props.children}
        </Unit>
      );
    }
  });

  return Button;
}

