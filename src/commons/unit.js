import React from 'react';

export const Unit = React.createClass({

  render: function () {

    const { props: { children, type = 'div', ...other } } = this;

    switch (type) {

      case 'link':
        return (
          <a {...other} >
            {children}
          </a>
        );

      case 'icon':
        return (
          <i {...other} />
        );

      case 'img':
        return (
          <img {...other} />
        );

      case 'div':
      default:
        return (
          <div {...other} >
            {children}
          </div>
        );
    }
  },
});
