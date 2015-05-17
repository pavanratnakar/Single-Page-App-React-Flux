"use strict";

var AppDispatcher = require("../dispatcher/AppDispatcher.js"),
    CategoryConstants = require("../constants/CategoryConstants");

var CategoryActions = {

    selectCategory: function (index) {
        AppDispatcher.handleViewAction({
            actionType: CategoryConstants.CATEGORY_SELECTED,
            data: index
        });
    },

    deSelectCategory: function (index) {
        AppDispatcher.handleViewAction({
            actionType: CategoryConstants.CATEGORY_DESELECTED,
            data: index
        });
    },

    deSelectCategories: function (data) {
        AppDispatcher.handleViewAction({
            actionType: CategoryConstants.CATEGORY_DESELECTED,
            data: data
        });
    },

    receiveCategories: function (data) {
        AppDispatcher.handleServerAction({
            actionType: CategoryConstants.CATEGORY_RECEIVE_DATA,
            data: data
        });
    }
};

module.exports = CategoryActions;