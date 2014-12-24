"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui dimmer';

  var Dimmer = React.createClass({

    mixins: [ClassGenerator],

    render: function () {
      return (
        <div className={this.getClassName(defaultClassName)} >
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
          $(this.getDOMNode()).dimmer();
        } else {
          $(this.getDOMNode()).dimmer(this.props.init);
        }
      }
    }
  });

  return Dimmer;
}
