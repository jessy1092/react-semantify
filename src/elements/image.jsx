"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui image';

  var Image = React.createClass({

    mixins: [ClassGenerator],

    render: function () {

      var {className, ...other} = this.props;

      return (
        <img {...other} className={this.getClassName(defaultClassName)} >
          {this.props.children}
        </img>
      );
    }
  });

  return Image;
}
