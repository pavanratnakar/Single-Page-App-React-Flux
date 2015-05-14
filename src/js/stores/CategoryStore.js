"use strict";

var CategoryConstants = require("../constants/CategoryConstants.js"),
    AppDispatcher = require("../dispatcher/AppDispatcher.js"),
    EventEmitter = require("events").EventEmitter,
    _ = require("lodash");

var _categories = [];

function loadCategoriesData (data) {
    _categories = data;
}

function selectCategory (id) {
    _categories = _.map(_categories, function (category) {
        if (category.id === id) {
            category.value = true;
        }
        return category;
    });
}

function deSelectCategory (id) {
    id = id || null;
    _categories = _.map(_categories, function (category) {
        if (!id || category.id === id) {
            category.value = false;
        }
        return category;
    });
}

var CategoryStore = _.extend({}, EventEmitter.prototype, {
    getCategories: function () {
        return _categories;
    },
    getActiveCategories: function () {
        return _.filter(_categories, function (category) {
            if (category.value) {
                return true;
            }
            return false;
        });
    },
    emitChange: function () {
        this.emit("change");
    },
    addChangeListener: function (callback) {
        this.on("change", callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener("change", callback);
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case CategoryConstants.CATEGORY_RECEIVE_DATA:
            loadCategoriesData(action.data);
            break;

        case CategoryConstants.CATEGORY_SELECTED:
            selectCategory(action.data)
            break;

        case CategoryConstants.CATEGORY_DESELECTED:
            deSelectCategory(action.data)
            break;

        default:
            return true;
    }

    CategoryStore.emitChange();
});

module.exports = CategoryStore;