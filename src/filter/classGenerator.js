
import React from 'react';

export default function (defaultClassName, ComposeComponent) {

  return class extends React.Component {

    render() {
      let { props: { className = '', children, ...other } } = this;

      if (typeof className !== 'undefined') {
        className += ' ' + defaultClassName;
      }

      return (
        <ComposeComponent className={className} {...other} >
          {children}
        </ComposeComponent>
      );
    }
  };
};
