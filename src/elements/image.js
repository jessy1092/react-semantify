
import React from 'react';

import filter from '../filter';

const stateArray       = ['disabled'];
const defaultClassName = 'ui image';

const Basic = React.createClass({

  render: function () {
    return (
      <img {...this.props} />
    );
  }
});

const Image = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Image;
