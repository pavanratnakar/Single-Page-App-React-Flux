"use strict";

var React = require("react"),
    Filters = require("./Filters.jsx"),
    Product = require("./Product.jsx");

var Products = React.createClass({

    propTypes: {
        products: React.PropTypes.array,
        categories: React.PropTypes.array
    },

    getDefaultProps: function() {
        return {
            products: [],
            categories: []
        };
    },

    getInitialState: function () {
        return {
            farm: "farm7.staticflickr.com"
        };
    },

    render: function () {
        var t = this;

        var products = t.props.products.map(function (p) {
            return (
                <Product
                    key={p.id}
                    id={p.id}
                    farm={t.state.farm}
                    server={p.server}
                    secret={p.secret}
                    title={p.title} />
            );
        });

        return (
            <div className="all-products page">
                <Filters categories={t.props.categories} />
                <ul className="products-list Fx(0) Op(0) P(0) Ta(c) Maw(1500px) Mstart(225px) visible_Op(1) visible_Trsde(1s) visible_Pe(a)">
                    {products}
                </ul>
            </div>
        );
    }
});

module.exports = Products;
