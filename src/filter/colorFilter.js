
import PropTypes from 'prop-types';
import React from 'react';

const colorArray = [
  'black', 'yellow', 'green', 'blue',
  'orange', 'purple', 'red', 'teal'
];

export default function (ComposeComponent) {

  class HigherOrderComponent extends React.Component {

    render() {
      let { props: { className = '', children, color = '', ...other } } = this;

      if (colorArray.indexOf(color) !== -1) {
        className = `${className} ${color}`.trim();
      }

      return (
        <ComposeComponent className={className} {...other} >
          {children}
        </ComposeComponent>
      );
    }
  }

  HigherOrderComponent.propTypes = {
    color: PropTypes.oneOf(colorArray)
  };

  return HigherOrderComponent;
}
