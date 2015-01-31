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
      <Item>
        <div className="menu">
          <Header className="small inverted">Elements</Header>
          {this.renderElements()}
        </div>
      </Item>
    );
  },

  renderElements() {
    return (
      this.state.routes.map((entry, index) => {
        return (
          <Item type="link"
                href={'#/' + entry.name}
                active={entry.status}
                onClick={this._onClick.bind(this, index)}>
            {entry.name}
          </Item>
        );
      }.bind(this))
    );
  },

  _onClick(index) {
    var {routes} = this.state;
    RouteActions.updatePath(routes[index].name);
  },

  _onChange() {
    this.setState(RouteStore.getAll());
  }

});
