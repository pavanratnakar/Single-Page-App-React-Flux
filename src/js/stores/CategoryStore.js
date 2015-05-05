"use strict";

var CategoryConstants = require("../constants/CategoryConstants.js"),
    AppDispatcher = require("../dispatcher/AppDispatcher.js"),
    EventEmitter = require("events").EventEmitter,
    _ = require("lodash");

var _categories = [];

function loadCategoriesData (data) {
    _categories = data;
}

var CategoryStore = _.extend({}, EventEmitter.prototype, {
    getCategories: function () {
        return _categories;
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case CategoryConstants.CATEGORY_RECEIVE_DATA:
            loadCategoriesData(action.data);
            break;

        case CategoryConstants.CATEGORY_SELECTED:

            break;

        default:
            return true;
    }
});

module.exports = CategoryStore;