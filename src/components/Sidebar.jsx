"use strict";

import React        from 'react';
import RouteStore   from '../stores/RouteStore.js';
import RouteActions from '../actions/RouteActions.js';

import {Menu, Item, Header} from 'react-semantify';

export default React.createClass({

  getInitialState() {
    return {
      routes: RouteStore.getAll()
    }
  },

  componentDidMount() {
    RouteStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    RouteStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <div>
        <Item className="header">Basic</Item>
        <Item>
          <Menu className="inverted vertical">
            {this.renderElements('Basic')}
          </Menu>
        </Item>
        <Item className="header">Elements</Item>
        <Item>
          <Menu className="inverted vertical">
            {this.renderElements('Elements')}
          </Menu>
        </Item>
        <Item className="header">Modules</Item>
        <Item>
          <Menu className="inverted vertical">
            {this.renderElements('Modules')}
          </Menu>
        </Item>
      </div>
    );
  },

  renderElements(kind) {
    return (
      this.state.routes[kind].map((entry, index) => {
        return (
          <Item type="link"
                href={'#/' + entry.name}
                active={entry.status}
                onClick={this._onClick.bind(this, kind, index)}>
            {entry.name}
          </Item>
        );
      })
    );
  },

  _onClick(kind, index) {
    var {routes} = this.state;
    RouteActions.updatePath(routes[kind][index].name);
  },

  _onChange() {
    this.setState({routes: RouteStore.getAll()});
  }

});
