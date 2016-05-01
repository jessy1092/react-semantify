
import React from 'react';

export default function (defaultClassName, ComposeComponent) {

  return class extends React.Component {

    render() {
      let { props: { className = '', children, ...other } } = this;

      className = `${className} ${defaultClassName}`.trim();

      return (
        <ComposeComponent className={className} {...other} >
          {children}
        </ComposeComponent>
      );
    }
  };
};
