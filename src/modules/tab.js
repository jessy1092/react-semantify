"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);

  var defaultClassName = 'ui tab';

  var Tab = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, active, loading, tab, ...other} = this.props;

      var state = {
        active: this.getActive(),
        loading: this.getLoading()
      };

      return (
        <div {...other}
          className={this.getClassName(defaultClassName, state)}
          data-tab={tab}>
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
          $(this.getDOMNode()).tab();
        } else {
          $(this.getDOMNode()).tab(this.props.init);
        }
      }
    }
  });

  return Tab;
}
