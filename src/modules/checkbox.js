"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.js')(React);

  var defaultClassName = 'ui checkbox';

  var Checkbox = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, color, type, disabled, readOnly, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          color="null"
          type="div"
          disabled={this.getDisabled()}
          readOnly={this.getReadOnly()}>
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
          $(this.getDOMNode()).checkbox();
        } else {
          $(this.getDOMNode()).checkbox(this.props.init);
        }
      }
    }
  });

  return Checkbox;
}
