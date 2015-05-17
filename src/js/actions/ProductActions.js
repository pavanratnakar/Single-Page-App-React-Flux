"use strict";

var AppDispatcher = require("../dispatcher/AppDispatcher.js"),
    ProductConstants = require("../constants/ProductConstants");

var ProductActions = {

    selectProduct: function (index) {
        AppDispatcher.handleViewAction({
            actionType: ProductConstants.PRODUCT_SELECTED,
            data: index
        });
    },

    deSelectProduct: function () {
        AppDispatcher.handleViewAction({
            actionType: ProductConstants.PRODUCT_DESELECTED
        });
    },

    receiveProducts: function (data) {
        AppDispatcher.handleServerAction({
            actionType: ProductConstants.PRODUCT_RECEIVE_DATA,
            data: data
        });
    }

};

module.exports = ProductActions;