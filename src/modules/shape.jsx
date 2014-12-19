"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui shape';

  var Shape = React.createClass({

    mixins: [ClassGenerator],

    render: function () {

      var {className, ...other} = this.props;

      return (
        <div {...other} className={this.getClassName(defaultClassName)} >
          {this.props.children}
        </div>
      );
    },
    componentDidMount: function () {
      if (typeof this.props.behavior != 'undefined') {
        $(this.getDOMNode()).shape(this.props.behavior);
      } else {
        $(this.getDOMNode()).shape();
      }
    }
  });

  return Shape;
}
