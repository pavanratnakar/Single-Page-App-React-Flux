/** @jsx React.DOM */

var React = require("react"),
    Filters = require("./Filters.jsx"),
    Product = require("./Product.jsx");

// Export the ReactApp component
var Products = React.createClass({

    // Set the initial component state
    getInitialState: function (props) {
        return {
            farm: "farm7.staticflickr.com"
        };
    },

    render: function () {
        var t = this;

        var products = t.props.products.map(function (p) {
            return (
                <Product key={p.id} id={p.id} server={p.server} secret={p.secret} title={p.title} farm={t.state.farm} onClick={t.productChange} />
            )
        });

        return (
            <div className="all-products page">
                <Filters categories={t.props.categories} />
                <ul className="products-list Fx(0) Op(0) P(0) Ta(c) Maw(1500px) Mstart(225px) visible_Op(1) visible_Trsde(1s) visible_Pe(a)">
                    {products}
                </ul>
            </div>
        )
    }
});

module.exports = Products;