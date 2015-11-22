"use strict";

import React from 'react';

import {Segment, Header} from 'react-semantify';

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
