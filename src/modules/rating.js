
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui rating';
const componentName    = 'Rating';

class Basic extends React.Component {
  render() {

    const { props: { children, rating, maxRating, init, ...other } } = this;

    return (
      <div {...other}
        data-rating={rating}
        data-max-rating={maxRating}
        ref="rating" >
        {children}
      </div>
    );
  }

  componentDidMount() {

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
}

const Rating = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Rating;
