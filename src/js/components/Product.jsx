"use strict";

var React = require("react"),
    ProductActions = require("../actions/ProductActions");

var Product = React.createClass({

    propTypes: {
        id: React.PropTypes.string,
        farm: React.PropTypes.string,
        server: React.PropTypes.string,
        secret: React.PropTypes.string,
        title: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            id: "",
            farm: "",
            server: "",
            secret: "",
            title: ""
        };
    },

    clickHandler: function (id) {
        ProductActions.selectProduct(id);
    },

    render: function () {
        return (
            <li
                onClick={this.clickHandler.bind(this, this.props.id)}
                className="Bxz(bb) D(ib) Cur(p) Pos(r) Ta(start) Bg(subtitle) Trsde(0.2s) Bdrs(3px)"
            >
                <a href="#" className="product-photo D(b) Ta(c) W(150px) Bxz(bb)">
                    <img src={"http://" + this.props.farm + "/" + this.props.server + "/" + this.props.id + "_" + this.props.secret + "_q.jpg"} height="150" alt={this.props.title} />
                </a>
                <h2 className="D(b) Fz(10px) Whs(nw) Ov(h) Tov(e) Maw(130px) P(10px) Ta(c) M(0) Pos(a) End(0) B(0) Bgc(#000.4)">
                    <a href="#" className="Td(n) C(subtitle)">{this.props.title}</a>
                </h2>
                <div className="highlight Pos(a) W(100%) H(100%) Op(0) Op(1):h T(0) Start(0) Trsde(0.4s) Bgc(#000.1)"></div>
            </li>
        );
    }

});

module.exports = Product;
