"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.js')(React);

  var defaultClassName = 'ui search';

  var Search = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, color, type, active, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          color="null"
          type="div"
          loading={this.getLoading()}>
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
          $(this.getDOMNode()).search();
        } else {
          $(this.getDOMNode()).search(this.props.init);
        }
      }
    }
  });

  return Search;
}
