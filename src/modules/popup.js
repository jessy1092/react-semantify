import React from 'react';
import ClassGenerator from '../mixins/classGenerator';

let defaultClassName = 'ui popup';

const Popup = React.createClass({

  mixins: [ClassGenerator],
  
  componentDidMount = function () {
    $(ReactDOM.findDOMNode(this)).prev().popup({
      inline: true,
    });
  }

  render: function () {
    let {children, ...other} = this.props;

    return (
      <div {...other} className={this.getClassName(defaultClassName)} >
        {this.props.children}
      </div>
    );
  }
});

export default Popup;
