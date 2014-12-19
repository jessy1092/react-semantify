"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui rating';

  var Rating = React.createClass({

    mixins: [ClassGenerator],

    render: function () {

      var {className, rating, max_rating, ...other} = this.props;

      return (
        <div {...other}
          className={this.getClassName(defaultClassName)}
          data-rating={rating}
          data-max-rating={max_rating}>
          {this.props.children}
        </div>
      );
    },
    componentDidMount: function () {
      $(this.getDOMNode()).rating();
    }
  });

  return Rating;
}
