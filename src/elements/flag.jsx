"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var Unit           = require('../commons/unit.jsx')(React);

  var defaultClassName = 'flag';

  var Flag = React.createClass({

    mixins: [ClassGenerator],

    propTypes: {
      onClick: React.PropTypes.func
    },

    render: function () {

      var {className, ...other} = this.props;

      return (
        <Unit {...other}
          className={this.getClassName(defaultClassName)}
          type="icon"
          color="null"
          onClick={this.props.onClick} >
        </Unit>
      );
    }
  });

  return Flag;
}
