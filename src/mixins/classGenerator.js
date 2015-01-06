"use strict";
module.exports = function (React) {

  var classSet = React.addons.classSet;

  var ClassGenerator = {

    propTypes: {
      className: React.PropTypes.string
    },

    getClassName: function (defaultClassName, addClassName) {
      var classResult = defaultClassName;

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

  return ClassGenerator;
};
