import React from 'react';
import classSet from 'classnames';

export const Unit = React.createClass({

  propTypes: {
    className: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired
  },

  render: function () {

    let {
      className, type, color, value,
      disabled, active, loading,
      ...other
    } = this.props;

    switch (type) {

      case 'link':
        return (
          <a {...other}
            className={this._generateClassName()}
            data-value={value}>
            {this.props.children}
          </a>
        );

      case 'icon':
        return (
          <i {...other}
            className={this._generateClassName()}
            data-value={value}>
            {this.props.children}
          </i>
        );

      case 'img':
        return (
          <img {...other}
            className={this._generateClassName()}>
            {this.props.children}
          </img>
        );

      case 'div':
      default:
        return (
          <div {...other}
            className={this._generateClassName()}
            data-value={value}>
            {this.props.children}
          </div>
        );
    }
  },

  _generateClassName: function () {
    let className = this.props.className;

    if (this.props.color != 'null') {
      className += ' ' + this.props.color;
    }

    className += ' ' + classSet({
      'disabled': this.props.disabled,
      'active': this.props.active,
      'loading': this.props.loading,
      'focus': this.props.focus,
      'error': this.props.error,
      'completed': this.props.completed,
      'read-only': this.props.readOnly
    });

    return className;
  }
});
