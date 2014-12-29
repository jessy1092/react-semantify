"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);

  var defaultClassName = 'ui progress';

  var Progress = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, percent, value, total, ...other} = this.props;

      var state = {
        active: this.getActive(),
        success: this.getSuccess(),
        warning: this.getWarning(),
        error: this.getError(),
        disabled: this.getDisabled()
      };

      return (
        <div {...other}
          className={this.getClassName(defaultClassName, state)}
          data-percent={percent}
          data-value={value}
          data-total={total}
          active={this.getActive()}
          success={this.getSuccess()}
          warning={this.getWarning()}
          error={this.getError()}
          disabled={this.getDisabled()}>
          {this.props.children}
        </div>
      );
    },

    componentDidMount: function () {
      if (typeof this.props.init != 'undefined') {
        if (this.props.init === false) {
          return;
        }

        if (this.props.init === true) {
          $(this.getDOMNode()).progress();
        } else {
          $(this.getDOMNode()).progress(this.props.init);
        }
      }
    }
  });

  return Progress;
}
