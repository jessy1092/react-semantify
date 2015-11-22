"use strict";

import React     from 'react';
import Semantify from 'react-semantify';

var {Segment, Header} = Semantify;

export default React.createClass({

  render() {
    return (
      <Segment className="header">
        <div className="container">
          <Header className="huge">
            {this.props.title}
            <Header className="sub">{this.props.children}</Header>
          </Header>
        </div>
      </Segment>
    );
  }
})
