"use strict";

var Dispatcher = require("flux").Dispatcher;

var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function (action) {
    this.dispatch({
        source: "VIEWACTION",
        action: action
    });
};

AppDispatcher.handleServerAction = function (action) {
	this.dispatch({
		source: "SERVERACTION",
		action: action
	});
};

module.exports = AppDispatcher;
