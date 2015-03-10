"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui rating';

  var Rating = React.createClass({

    mixins: [ClassGenerator],

    render: function () {

      var {className, rating, maxRating, ...other} = this.props;

      return (
        <div {...other}
          className={this.getClassName(defaultClassName)}
          data-rating={rating}
          data-max-rating={maxRating}>
          {this.props.children}
        </div>
      );
    },

    componentDidMount: function () {
      if (typeof this.props.init != 'undefined') {
        if (this.props.init === false) {
          return;
        }

        if (this.props.init === true) {
          $(this.getDOMNode()).rating();
        } else {
          $(this.getDOMNode()).rating(this.props.init);
        }
      }
    }
  });

  return Rating;
}
