"use strict";

import React        from 'react/addons';
import Semantify    from 'react-semantify';
import RouteStore   from '../stores/RouteStore.js';
import RouteActions from '../actions/RouteActions.js';

var {Menu, Item, Header} = Semantify;

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
        <Menu className="ui inverted">
          <Item className="header">Basic</Item>
          <Item>
            <Menu className="inverted">
              {this.renderElements('Basic')}
            </Menu>
          </Item>
          <Item className="header">Elements</Item>
          <Item>
            <Menu className="inverted">
              {this.renderElements('Elements')}
            </Menu>
          </Item>
          <Item className="header">Modules</Item>
          <Item>
            <Menu className="inverted">
              {this.renderElements('Modules')}
            </Menu>
          </Item>
        </Menu>
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
      }.bind(this))
    );
  },

  _onClick(kind, index) {
    var {routes} = this.state;
    RouteActions.updatePath(routes[kind][index].name);
  },

  _onChange() {
    this.setState(RouteStore.getAll());
  }

});
