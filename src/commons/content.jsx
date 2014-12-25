"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.jsx')(React);

  var defaultClassName = 'content';

  var Content = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, type, color, active, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="div"
          color="null"
          active={this.getActive()}>
          {this.props.children}
        </Unit>
      );
    }
  });

  return Content;
}
