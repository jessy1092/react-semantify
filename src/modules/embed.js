
import React from 'react';

import filter from '../filter';

const defaultClassName = 'ui embed';
const componentName    = 'Embed';

const Basic = React.createClass({

  render: function () {

    const {
      props: {
        children, placeholder, source, sourceId, url, icon, init, ...other
      }
    } = this;

    return (
      <div {...other}
        data-source={source}
        data-id={sourceId}
        data-placeholder={placeholder}
        data-url={url}
        data-icon={icon}
        ref="embed">
        {children}
      </div>
    );
  },

  componentDidMount: function () {

    const { props: { init = false } } = this;

    if (init === false) {
      return;
    }

    if (init === true) {
      $(this.refs.embed).embed();
    } else {
      $(this.refs.embed).embed(init);
    }
  }
});

const Embed = new filter(Basic)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Embed;
