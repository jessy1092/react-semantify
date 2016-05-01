
import React from 'react';

const link = ({children, ...other}) => (
  <a {...other}>{children}</a>
);

const icon = ({children, ...other}) => (
  <i {...other}>{children}</i>
);

const div = ({children, ...other}) => (
  <div {...other}>{children}</div>
);

const basicComponentMap = {
  link,
  icon,
  div
};

class Unit extends React.Component {

  render() {

    const { props: { children, type = 'div', ...other } } = this;

    const Component = basicComponentMap[type];

    return (
      <Component {...other}>{children}</Component>
    );
  }
}

export default Unit;
