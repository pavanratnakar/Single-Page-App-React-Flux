"use strict";

var ProductConstants = require("../constants/ProductConstants.js"),
    AppDispatcher = require("../dispatcher/AppDispatcher.js"),
    EventEmitter = require("events").EventEmitter,
    _ = require("lodash");

var _products = [];

function loadProductData (data) {
    _products = data;
}

var ProductStore = _.extend({}, EventEmitter.prototype, {
    getProducts: function () {
        return _products;
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case ProductConstants.RECEIVE_DATA:
            loadProductData(action.data);
            break;

        case ProductsContants.SELECTED:

            break;

        default:
            return true;
    }
});

module.exports = ProductStore;