"use strict";
module.exports = function (React) {

  var Unit = React.createClass({

    propTypes: {
      className: React.PropTypes.string.isRequired,
      type: React.PropTypes.string.isRequired,
      color: React.PropTypes.string.isRequired,
      onClick: React.PropTypes.func
    },

    render: function () {

      var {className, type, color, onClick, value, ...other} = this.props;

      switch (type) {

        case 'link':
          return (
            <a {...other}
              className={this._generateClassName()}
              onClick={this._onClick}
              data-value={value} >
              {this.props.children}
            </a>
          );

        case 'icon':
          return (
            <i {...other}
              className={this._generateClassName()}
              onClick={this._onClick}
              data-value={value} >
              {this.props.children}
            </i>
          );

        case 'div':
        default:
          return (
            <div {...other}
              className={this._generateClassName()}
              onClick={this._onClick}
              data-value={value} >
              {this.props.children}
            </div>
          );
      }
    },

    _generateClassName: function () {
      var className = this.props.className;

      if (this.props.color != 'null') {
        className += ' ' + this.props.color;
      }

      return className;
    },

    _onClick: function () {
      if (typeof this.props.onClick != 'undefined') {
        this.props.onClick();
      }
    }
  });

  return Unit;
}
