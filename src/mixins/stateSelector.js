"use strict";
module.exports = function (React) {

  var classSet = React.addons.classSet;

  var StateSelector = {

    propTypes: {
      disabled: React.PropTypes.bool,
      active: React.PropTypes.bool,
      loading: React.PropTypes.bool,
      focus: React.PropTypes.bool,
      error: React.PropTypes.bool,
      completed: React.PropTypes.bool,
      readOnly: React.PropTypes.bool,
      success: React.PropTypes.bool,
      warning: React.PropTypes.bool
    },

    getDisabled: function () {
      var disabled = false;

      if (typeof this.props.disabled !== 'undefined') {
        disabled = this.props.disabled;
      }

      return disabled;
    },

    getActive: function () {
      var active = false;

      if (typeof this.props.active !== 'undefined') {
        active = this.props.active;
      }

      return active;
    },

    getLoading: function () {
      var loading = false;

      if (typeof this.props.loading !== 'undefined') {
        loading = this.props.loading;
      }

      return loading;
    },

    getFocus: function () {
      var focus = false;

      if (typeof this.props.focus !== 'undefined') {
        focus = this.props.focus;
      }

      return focus;
    },

    getError: function () {
      var error = false;

      if (typeof this.props.error !== 'undefined') {
        error = this.props.error;
      }

      return error;
    },

    getCompleted: function () {
      var completed = false;

      if (typeof this.props.completed !== 'undefined') {
        completed = this.props.completed;
      }

      return completed;
    },

    getReadOnly: function () {
      var readOnly = false;

      if (typeof this.props.readOnly !== 'undefined') {
        readOnly = this.props.readOnly;
      }

      return readOnly;
    },

    getSuccess: function () {
      var success = false;

      if (typeof this.props.success !== 'undefined') {
        success = this.props.success;
      }

      return success;
    },

    getWarning: function () {
      var warning = false;

      if (typeof this.props.warning !== 'undefined') {
        warning = this.props.warning;
      }

      return warning;
    }
  };

  return StateSelector;
};
