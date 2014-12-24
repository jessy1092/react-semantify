"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui progress';

  var Progress = React.createClass({

    mixins: [ClassGenerator],

    render: function () {

      var {className, percent, value, total, ...other} = this.props;

      return (
        <div {...other}
          className={this.getClassName(defaultClassName)}
          data-percent={percent}
          data-value={value}
          data-total={total}>
          {this.props.children}
        </div>
      );
    },

    componentDidMount: function () {
      if (typeof this.props.init != 'undefined') {
        if (this.props.init === true) {
          $(this.getDOMNode()).progress();
        } else {
          $(this.getDOMNode()).progress(this.props.init);
        }
      }
    }
  });

  return Progress;
}
