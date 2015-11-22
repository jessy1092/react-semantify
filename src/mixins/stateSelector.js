import React from 'react';

export default {

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
    let disabled = false;

    if (typeof this.props.disabled !== 'undefined') {
      disabled = this.props.disabled;
    }

    return disabled;
  },

  getActive: function () {
    let active = false;

    if (typeof this.props.active !== 'undefined') {
      active = this.props.active;
    }

    return active;
  },

  getLoading: function () {
    let loading = false;

    if (typeof this.props.loading !== 'undefined') {
      loading = this.props.loading;
    }

    return loading;
  },

  getFocus: function () {
    let focus = false;

    if (typeof this.props.focus !== 'undefined') {
      focus = this.props.focus;
    }

    return focus;
  },

  getError: function () {
    let error = false;

    if (typeof this.props.error !== 'undefined') {
      error = this.props.error;
    }

    return error;
  },

  getCompleted: function () {
    let completed = false;

    if (typeof this.props.completed !== 'undefined') {
      completed = this.props.completed;
    }

    return completed;
  },

  getReadOnly: function () {
    let readOnly = false;

    if (typeof this.props.readOnly !== 'undefined') {
      readOnly = this.props.readOnly;
    }

    return readOnly;
  },

  getSuccess: function () {
    let success = false;

    if (typeof this.props.success !== 'undefined') {
      success = this.props.success;
    }

    return success;
  },

  getWarning: function () {
    let warning = false;

    if (typeof this.props.warning !== 'undefined') {
      warning = this.props.warning;
    }

    return warning;
  }
};
