/** @jsx React.DOM */

var React = require("react"),
    ProductStore = require("../stores/ProductStore.js"),
    CategoryStore = require("../stores/CategoryStore.js"),
    Router = require("react-router");

var RouteHandler = Router.RouteHandler;

// Export the ReactApp component
var ReactApp = React.createClass({

    mixins: [Router.State],

    contextTypes: {
        router: React.PropTypes.func,
    },

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

    showProductPage: function () {
        $(".single-product").addClass("visible");
        this.context.router.transitionTo("/product/" + this.state.product.id);
    },

    showProductsPage: function () {
        $(".all-products").addClass("visible");
    },

    showNotFound: function () {
        $(".error").addClass("visible");
    },

    hideProductPage: function () {
        this.setState({
            product: {}
        });
        this.context.router.transitionTo("/");
    },

    getInitialState: function () {
        // Set initial application state using props
        return this.getState();
    },

    renderPage: function () {
        var t = this;

        $(".main-content .page").removeClass("visible");

    },

    componentDidUpdate: function () {
        var t = this;

        if (t.isActive("notfound")) {
            t.showNotFound();
        } else if (t.state.product.id) {
            t.showProductPage();
        } else {
            t.showProductsPage();
        }
        return true;
    },

    componentDidMount: function () {
        var t = this;

        ProductStore.addChangeListener(t._onChange);
        if (t.isActive("notfound")) {
            t.showNotFound();
        } else {
            t.showProductsPage();
        }
    },

    render: function () {
        return (
            <div className="main-content Bxz(bb) Ta(c) M(a) Mstart(45px) Mend(60px) Pstart(40px) Pend(40px)">
                <RouteHandler categories={this.state.categories} products={this.state.products} product={this.state.product} onClose={this.hideProductPage} />
            </div>
        )
    }
});

module.exports = ReactApp;