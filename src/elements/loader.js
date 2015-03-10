"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.js')(React);

  var defaultClassName = 'ui loader';

  var Loader = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="div"
          color="null"
          disabled={this.getDisabled()}
          active={this.getActive()}>
          {this.props.children}
        </Unit>
      );
    }
  });

  return Loader;
}
