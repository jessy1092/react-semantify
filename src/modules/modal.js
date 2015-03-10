"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.js')(React);

  var defaultClassName = 'ui modal';

  var Modal = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, color, type, active, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          color="null"
          type="div"
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
          $(this.getDOMNode()).modal();
        } else {
          $(this.getDOMNode()).modal(this.props.init);
        }
      }
    }
  });

  return Modal;
}
