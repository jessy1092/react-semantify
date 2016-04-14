
import React from 'react';

import filter from '../filter';

const defaultClassName = 'flag';

const Basic = React.createClass({

  render: function () {
    return (
      <i {...this.props} />
    );
  }
});

const Flag = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Flag;
