
import React from 'react';

import filter from '../filter';

const defaultClassName = 'comment';

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

const Comment = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent();

export default Comment;
