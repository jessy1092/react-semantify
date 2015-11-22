import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui rating';

module.exports = React.createClass({

  mixins: [ClassGenerator],

  render: function () {

    let {className, rating, maxRating, ...other} = this.props;

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
