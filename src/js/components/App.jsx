/** @jsx React.DOM */

var React = require("react"),
    Products = require("./Products.jsx"),
    Overlay = require("./Overlay.jsx"),
    Error = require("./Error.jsx"),
    ProductStore = require("../stores/ProductStore.js"),
    CategoryStore = require("../stores/CategoryStore.js");

// Export the ReactApp component
var ReactApp = React.createClass({

    _onChange: function () {
        this.setState(this.getState());
    },

    getState: function () {
        return {
            products: ProductStore.getProducts(),
            product: ProductStore.getProduct() || {},
            filters: {},
            categories: CategoryStore.getCategories()
        };
    },

    getInitialState: function () {
        // Set initial application state using props
        return this.getState();;
    },

    componentDidMount: function () {
        ProductStore.addChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div className="main-content">
                <Products categories={this.state.categories} products={this.state.products} />
                <Overlay product={this.state.product} />
                <Error />
            </div>
        )
    }
});

module.exports = ReactApp;