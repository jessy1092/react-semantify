"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui sticky';

  var Sticky = React.createClass({

    mixins: [ClassGenerator],

    propTypes: {
      behavior: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
      ])
    },

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
          $(this.getDOMNode()).sticky();
        } else {
          $(this.getDOMNode()).sticky(this.props.init);
        }
      }
    }
  });

  return Sticky;
}
