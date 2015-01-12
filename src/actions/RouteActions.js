"use strict";
var AppDispatcher  = require('../dispatcher/AppDispatcher');
var RouteConstants = require('../constants/RouteConstants');

var RouteActions = {
  updatePath: function (pathName) {
    AppDispatcher.dispatch({
      actionType: RouteConstants.ROUTE_UPDATE_PATH,
      pathName: pathName
    });
  }
};

module.exports = RouteActions;
