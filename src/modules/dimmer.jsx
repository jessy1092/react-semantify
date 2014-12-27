"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.jsx')(React);

  var defaultClassName = 'ui dimmer';

  var Dimmer = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, color, type, disabled, active, ...other} = this.props;

      return (
        <Unit
          className={this.getClassName(defaultClassName)}
          color="null"
          type="div"
          disabled={this.getDisabled()}
          active={this.getActive()}>
          {this.props.children}
        </Unit>
      );
    },

    componentDidMount: function () {
      if (typeof this.props.init != 'undefined') {
        if (this.props.init === false) {
          return;
        }

        if (this.props.init === true) {
          $(this.getDOMNode()).dimmer();
        } else {
          $(this.getDOMNode()).dimmer(this.props.init);
        }
      }
    }
  });

  return Dimmer;
}
