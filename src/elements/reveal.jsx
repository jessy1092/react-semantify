"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.jsx')(React);

  var defaultClassName = 'ui reveal';

  var Reveal = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="div"
          color="null"
          disabled={this.getDisabled()}>
          {this.props.children}
        </Unit>
      );
    }
  });

  return Reveal;
}
