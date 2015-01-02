"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);
  var StateSelector  = require('../mixins/stateSelector.js')(React);
  var Unit           = require('../commons/unit.jsx')(React);

  var defaultClassName = 'ui input';

  var Input = React.createClass({

    mixins: [ClassGenerator, StateSelector],

    render: function () {

      var {className, ...other} = this.props;

      if (typeof this.props.children != 'undefined') {
        return (
          <Unit {...other}
            className={this.getClassName(defaultClassName)}
            type="div"
            color="null"
            loading={this.getLoading()}
            focus={this.getFocus()}
            error={this.getError()}>
            {this.props.children}
          </Unit>
        );
      } else {
        return (
          <Unit
            className={this.getClassName(defaultClassName)}
            type="div"
            color="null"
            loading={this.getLoading()}
            focus={this.getFocus()}
            error={this.getError()}>
            <input {...other}
              placeholder={this.props.placeholder}
              type={this.props.type}/>
          </Unit>
        )
      }

    }
  });

  return Input;
}
