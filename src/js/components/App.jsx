"use strict";

var React = require("react"),
    ProductStore = require("../stores/ProductStore.js"),
    CategoryStore = require("../stores/CategoryStore.js"),
    ProductActions = require("../actions/ProductActions"),
    CategoryActions = require("../actions/CategoryActions"),
    Router = require("react-router");

var _ = {
        each: require("lodash/Collection/each")
    };

var RouteHandler = Router.RouteHandler;

// Export the ReactApp component
var ReactApp = React.createClass({

    mixins: [Router.State],

    contextTypes: {
        router: React.PropTypes.func
    },

    _onChange: function () {
        var t = this,
            state = t.getState(),
            tr = "/",
            filters = [];

        t.currentProps.products = state.products;
        t.currentProps.product = state.product;
        t.currentProps.categories = state.categories;
        _.each(state.categories, function (category) {
            if (category.value) {
                filters.push(category.id);
            }
        });

        if (state.product.id) {
            tr = "/product/" + state.product.id;
        } else if (filters.length > 0) {
            tr = "/filters/{\"category\":" + JSON.stringify(filters) + "}";
        }
        t.context.router.transitionTo(tr);
    },

    getState: function () {
        return {
            products: ProductStore.getProducts(CategoryStore.getActiveCategories()),
            product: ProductStore.getProduct() || {},
            categories: CategoryStore.getCategories()
        };
    },

    showProductPage: function () {
        $(".single-product").addClass("visible");
    },

    showProductsPage: function () {
        $(".all-products").addClass("visible");
    },

    showNotFound: function () {
        $(".error").addClass("visible");
    },

    getInitialState: function () {
        // Set initial application state using props
        this.currentProps = {};
        return this.getState();
    },

    renderPage: function () {
        $(".main-content .page").removeClass("visible");

    },

    loadPage: function () {
        var t = this;

        if (t.isActive("notfound")) {
            t.showNotFound();
        } else {
            if (t.context.router.getCurrentParams().productId) {
                t.showProductPage();
            } else {
                t.showProductsPage();
            }
        }
    },

    componentDidUpdate: function () {
        this.loadPage();
        return true;
    },

    componentWillMount: function () {
        var t = this,
            state = {};

        if (t.isActive("notfound")) {
            state = {};
        } else {
            // HACKY WAY OF ADDING ACTIONS. ORIGINAL OBJECTS SHOULD BE SMART ENOUGH HERE
            if (t.context.router.getCurrentParams().productId) {
                ProductActions.selectProduct(t.context.router.getCurrentParams().productId);
            }
            if (t.context.router.getCurrentParams().filters) {
                var f = JSON.parse(t.context.router.getCurrentParams().filters);
                _.each(f.category, function (category) {
                    CategoryActions.selectCategory(category);
                });
            }
            state = t.getState();
        }
        t.currentProps = state;

        ProductStore.addChangeListener(t._onChange);
        CategoryStore.addChangeListener(t._onChange);
    },

    componentDidMount: function () {
        this.loadPage();
    },

    render: function () {
        var t = this;

        return (
            <div className="main-content Bxz(bb) Ta(c) M(a) Mstart(45px) Mend(60px) Pstart(40px) Pend(40px) Mx(auto)--sm My(45px)--sm Px(24px)--sm Py(0)--sm">
                <RouteHandler {...t.currentProps} />
            </div>
        );
    }
});

module.exports = ReactApp;
