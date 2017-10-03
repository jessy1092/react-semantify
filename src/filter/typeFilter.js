
import PropTypes from 'prop-types';
import React from 'react';

const typeArray = ['div', 'link', 'icon'];

export default function (ComposeComponent) {

  class HigherOrderComponent extends React.Component {

    render() {
      let { props: { children, ...other } } = this;

      return (
        <ComposeComponent {...other} >
          {children}
        </ComposeComponent>
      );
    }
  }

  HigherOrderComponent.propTypes = {
    type: PropTypes.oneOf(typeArray)
  };

  return HigherOrderComponent;
}
