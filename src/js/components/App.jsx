/** @jsx React.DOM */

var React = require("react"),
    ProductStore = require("../stores/ProductStore.js"),
    CategoryStore = require("../stores/CategoryStore.js"),
    ProductActions = require("../actions/ProductActions"),
    Router = require("react-router"),
    _ = require("lodash");

var RouteHandler = Router.RouteHandler;

// Export the ReactApp component
var ReactApp = React.createClass({

    mixins: [Router.State],

    contextTypes: {
        router: React.PropTypes.func
    },

    _onChange: function () {
        var state = this.getState();

        this.currentProps.products = state.products;
        this.currentProps.product = state.product;
        this.currentProps.categories = state.categories;
        this.setState(state);
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

    filterChange: function () {
        // TODO
    },

    reset: function () {
        this.context.router.transitionTo("/");
    },

    hideProductPage: function () {
        this.setState({
            product: {}
        });
        this.reset();
    },

    getInitialState: function () {
        // Set initial application state using props
        this.currentProps = {};
        return this.getState();
    },

    renderPage: function () {
        var t = this;

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
        if (this.state.product.id) {
            this.context.router.transitionTo("/product/" + this.state.product.id);
        }
        this.loadPage();
        return true;
    },

    componentWillMount: function () {
        var t = this;

        ProductStore.addChangeListener(t._onChange);
        CategoryStore.addChangeListener(t._onChange);

        if (t.isActive("notfound")) {
            t.currentProps = {};
        } else {
            if (t.context.router.getCurrentParams().productId) {
                ProductActions.selectProduct(t.context.router.getCurrentParams().productId);
            } else {
                t.currentProps = _.merge(t.currentProps, {
                    products: t.state.products,
                    categories: t.state.categories,
                    filterChange: t.filterChange,
                    filterReset: t.reset
                });
            }
        }
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
        )
    }
});

module.exports = ReactApp;