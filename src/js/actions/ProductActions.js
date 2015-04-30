"use strict";

var AppDispatcher = require("../dispatcher/AppDispatcher.js"),
    ProductConstants = require("../constants/ProductConstants");

var ProductActions = {
    selectProduct: function (index) {
        AppDispatcher.handleViewAction({
            actionType: ProductConstants.SELECTED,
            data: index
        });
    },
    receiveProducts: function (data) {
        AppDispatcher.handleServerAction({
            actionType: ProductConstants.RECEIVE_DATA,
            data: data
        });
    }
};

module.exports = ProductActions;