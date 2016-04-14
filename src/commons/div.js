
import React from 'react';

const Div = ({children, ...other}) => (
  <div {...other}>{children}</div>
);

export default Div;
