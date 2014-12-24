"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui tab';

  var Tab = React.createClass({

    mixins: [ClassGenerator],

    render: function () {

      var {className, tab,...other} = this.props;

      return (
        <div {...other}
          className={this.getClassName(defaultClassName)}
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
