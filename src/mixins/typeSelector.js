import React from 'react';

let typeArray = ['div', 'link', 'icon'];

export default  {

  propTypes: {
    type: React.PropTypes.oneOf(typeArray)
  },

  getType: function () {
    let type = 'div';

    if (typeof this.props.type !== 'undefined') {
      if (typeArray.indexOf(this.props.type) !== -1) {
        type = this.props.type;
      }
    }
    return type;
  }
};
