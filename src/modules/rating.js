import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui rating';

const Rating = React.createClass({

  mixins: [ClassGenerator],

  render: function () {

    let {className, rating, maxRating, ...other} = this.props;

    return (
      <div {...other}
        className={this.getClassName(defaultClassName)}
        data-rating={rating}
        data-max-rating={maxRating}
        ref="rating">
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
        $(this.refs.rating).rating();
      } else {
        $(this.refs.rating).rating(this.props.init);
      }
    }
  }
});

export default Rating;
