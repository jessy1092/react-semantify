"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.jsx')(React);

  var defaultClassName = 'ui dropdown';

  var Dropdown = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, color, type, error, disable, active, ...other} = this.props;

      if (this.getActive() || this.getDisabled()) {
        defaultClassName += ' simple';
      }

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          color="null"
          type="div"
          error={this.getError()}
          disable={this.getDisabled()}
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
          $(this.getDOMNode()).dropdown();
        } else {
          $(this.getDOMNode()).dropdown(this.props.init);
        }
      }
    }
  });

  return Dropdown;
}
