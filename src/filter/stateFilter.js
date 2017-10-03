
import PropTypes from 'prop-types';
import React from 'react';

const keyMap = {
  'readOnly': 'read-only'
};

export default function (stateArray, ComposeComponent) {

  class HigherOrderComponent extends React.Component {

    render() {
      let { props: { className = '', children, ...other } } = this;

      stateArray.forEach((key) => {
        if (key in other) {

          if (other[key]) {
            if (key in keyMap) {
              className = `${className} ${keyMap[key]}`.trim();
            } else {
              className = `${className} ${key}`.trim();
            }
          }

          delete other[key];
        }
      });

      return (
        <ComposeComponent className={className} {...other} >
          {children}
        </ComposeComponent>
      );
    }
  }

  let propTypes = {};

  stateArray.forEach(key => propTypes[key] = PropTypes.bool);

  HigherOrderComponent.propTypes = propTypes;

  return HigherOrderComponent;
}
