
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui comments';

const Basic = React.createClass({

  render: function () {

    const { props: { children, ...other } } = this;

    return (
      <div {...other} >
        {children}
      </div>
    );
  }
});

const Comments = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Comments;
