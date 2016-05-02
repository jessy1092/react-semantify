
import React from 'react';

export default function (componentName, ComposeComponent) {

  return class extends React.Component {

    static displayName = componentName;

    render() {
      let { props: { children, ...other } } = this;

      return (
        <ComposeComponent {...other} >
          {children}
        </ComposeComponent>
      );
    }
  };
};
