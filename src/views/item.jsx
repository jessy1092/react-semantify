"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var TypeSelector   = require('../mixins/typeSelector.js')(React);
  var Unit           = require('../commons/unit.jsx')(React);

  var defaultClassName = 'item';

  var Item = React.createClass({

    mixins: [ClassGenerator, TypeSelector],

    render: function () {

      var {className, type, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type={this.getType()}
          color="null"
          value={this.props.value} >
          {this.props.children}
        </Unit>
      );
    }
  });

  return Item;
}
