/** @jsx React.DOM */

var React = require("react"),
    Products = require("./Products.jsx"),
    Overlay = require("./Overlay.jsx"),
    Error = require("./Error.jsx"),
    ProductStore = require("../stores/ProductStore.js");

// Export the ReactApp component
var ReactApp = React.createClass({

    getInitialState: function () {
        // Set initial application state using props
        return {
            products: ProductStore.getProducts(),
            filters: {},
            categories: [
                {
                    name: "nature",
                    value: false,
                    title: "Nature"
                },
                {
                    name: "people",
                    value: false,
                    title: "People"
                }
            ]
        };
    },

    render: function () {
        return (
            <div className="main-content">
                <Products categories={this.state.categories} products={this.state.products} />
                <Overlay />
                <Error />
            </div>
        )
    }
});

module.exports = ReactApp;