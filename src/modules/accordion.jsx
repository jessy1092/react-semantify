"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui accordion';

  var Accordion = React.createClass({

    mixins: [ClassGenerator],

    render: function () {
      return (
        <div className={this.getClassName(defaultClassName)} >
          {this.props.children}
        </div>
      );
    },
    componentDidMount: function () {
      $(this.getDOMNode()).accordion();
    }
  });

  return Accordion;
}
