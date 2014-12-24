"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui checkbox';

  var Checkbox = React.createClass({

    mixins: [ClassGenerator],

    render: function () {
      return (
        <div className={this.getClassName(defaultClassName)} >
          {this.props.children}
        </div>
      );
    },

    componentDidMount: function () {
      if (typeof this.props.init != 'undefined') {
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
