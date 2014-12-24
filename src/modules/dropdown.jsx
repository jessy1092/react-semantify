"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui dropdown';

  var Dropdown = React.createClass({

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
      if (typeof this.props.init != 'undefined') {
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
