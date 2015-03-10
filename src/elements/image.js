"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.js')(React);

  var defaultClassName = 'ui image';

  var Image = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, type, disabled, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="img"
          color="null"
          disabled={this.getDisabled()}>
          {this.props.children}
        </Unit>
      );
    }
  });

  return Image;
}
