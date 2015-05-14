"use strict";

var ProductConstants = require("../constants/ProductConstants.js"),
    AppDispatcher = require("../dispatcher/AppDispatcher.js"),
    EventEmitter = require("events").EventEmitter,
    _ = require("lodash");

var _products = [],
    _selected = 0;

function loadProductData (data) {
    _products = data;
}

function setSelected (index) {
    _selected = index.toString();
}

var ProductStore = _.extend({}, EventEmitter.prototype, {
    getProducts: function (filters) {
        filters = filters || {};

        var results = [];

        _.each(filters, function (filter) {
            _.some(_products, function (product) {
                if (product['category'] && product['category'].indexOf(filter.name) !== -1) {
                    results.push(product);
                }
            });
        });
        return results.length ? results : _products;
    },
    getProduct: function () {
        var filteredProduct = _.filter(_products, function (product) {
            if (product.id === _selected) {
                return true;
            }
        });
        return filteredProduct ? filteredProduct[0] : null
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
        case ProductConstants.PRODUCT_RECEIVE_DATA:
            loadProductData(action.data);
            break;

        case ProductConstants.PRODUCT_RECEIVE:
            setSelected(action.data);
            break;

        default:
            return true;
    }

    ProductStore.emitChange();
    return true;
});

module.exports = ProductStore;