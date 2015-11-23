"use strict";

import AppDispatcher  from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import RouteConfig    from './RouteConfig.js';
import RouteConstants from '../constants/RouteConstants';

function updatePath(pathName) {

  ['Basic', 'Elements', 'Collections', 'Views', 'Modules'].forEach((key) => {
    RouteConfig[key].forEach((entry) => {
      if (entry.name === pathName) {
        entry.status = true;
      } else {
        entry.status = false;
      }
    });
  });
}

class RouteStore extends EventEmitter {

  getAll() {
    return RouteConfig;
  }

  emitChange() {
    this.emit(RouteConstants.ROUTE_EVENT);
  }

  addChangeListener(listener) {
    this.on(RouteConstants.ROUTE_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(RouteConstants.ROUTE_EVENT, listener)
  }
}

var routeStore = new RouteStore();

AppDispatcher.register((action) => {

  switch(action.actionType) {
    case RouteConstants.ROUTE_UPDATE_PATH:
      updatePath(action.pathName);
      routeStore.emitChange();
      break;

    default:
  }
});

export default routeStore;
