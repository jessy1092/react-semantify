"use strict";
var AppDispatcher  = require('../dispatcher/AppDispatcher');
var EventEmitter   = require('events').EventEmitter;
var util           = require('util');
var RouteConfig    = require('./RouteConfig.js');
var RouteConstants = require('../constants/RouteConstants');

function updatePath(pathName) {
  RouteConfig.map(function (entry) {
    if (entry.name === pathName) {
      entry.status = true;
    } else {
      entry.status = false;
    }
  });
}

var RouteStore = function () {};

util.inherits(RouteStore, EventEmitter);

RouteStore.prototype.getAll = function() {
  return RouteConfig;
};

RouteStore.prototype.emitChange = function() {
  this.emit(RouteConstants.ROUTE_EVENT);
};

RouteStore.prototype.addChangeListener = function(listener) {
  this.on(RouteConstants.ROUTE_EVENT, listener);
};

RouteStore.prototype.removeChangeListener = function(listener) {
  this.removeListener(RouteConstants.ROUTE_EVENT, listener);
};

var routeStore = new RouteStore();

AppDispatcher.register(function (action) {

  switch(action.actionType) {
    case RouteConstants.ROUTE_UPDATE_PATH:
      updatePath(action.pathName);
      routeStore.emitChange();
      break;

    default:
  }
});

module.exports = routeStore;
