
import React from 'react';

const colorArray = [
  'black', 'yellow', 'green', 'blue',
  'orange', 'purple', 'red', 'teal'
];

export default function (ComposeComponent) {

  class HigherOrderComponent extends React.Component {

    render() {
      let { props: { className = '', children, color, ...other } } = this;

      if (typeof color !== 'undefined') {

        if (colorArray.indexOf(color) !== -1) {
          className += ' ' + color;
        }
      }

      return (
        <ComposeComponent className={className} {...other} >
          {children}
        </ComposeComponent>
      );
    }
  }

  HigherOrderComponent.propTypes = {
    color: React.PropTypes.oneOf(colorArray)
  };

  return HigherOrderComponent;
}
