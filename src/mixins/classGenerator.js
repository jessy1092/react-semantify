import React from 'react';
import classSet from 'classnames';

export default {

  propTypes: {
    className: React.PropTypes.string
  },

  getClassName: function (defaultClassName, addClassName) {
    let classResult = defaultClassName;

    if (typeof this.props.className !== 'undefined') {
      classResult += ' ' + this.props.className;
    }

    if (typeof addClassName !== 'undefined') {
      if (typeof addClassName === 'object') {
        classResult += ' ' + classSet(addClassName);
      } else {
        classResult += ' ' + addClassName;
      }
    }

    return classResult;
  }
};
