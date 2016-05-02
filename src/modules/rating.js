
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui rating';
const componentName    = 'Rating';

const Basic = React.createClass({

  render: function () {

    const { props: { children, rating, maxRating, ...other } } = this;

    return (
      <div {...other}
        data-rating={rating}
        data-max-rating={maxRating}
        ref="rating" >
        {children}
      </div>
    );
  },

  componentDidMount: function () {

    const { props: { init = false } } = this;

    if (init === false) {
      return;
    }

    if (init === true) {
      $(this.refs.rating).rating();
    } else {
      $(this.refs.rating).rating(init);
    }
  }
});

const Rating = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Rating;
