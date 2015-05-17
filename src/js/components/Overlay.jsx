/** @jsx React.DOM */

var React = require("react"),
    ProductActions = require('../actions/ProductActions');

// Export the ReactApp component
var Overlay = React.createClass({

    getInitialState: function () {
        return {
            farm: "farm7.staticflickr.com"
        };
    },

    closeClickHandler: function () {
        ProductActions.deSelectProduct();
    },

    render: function () {
        return (
            <div className="single-product page Z(100)">
                <div className="overlay W(100%) Pos(f) Bg(overlayBg) Z(100) Trsde(0.4s) T(0) Start(0) visible_H(100%)"></div>
                <div className="preview-large Bxz(bb) W(760px) H(500px) Pos(f) Mstart(-375px) Mt(-275px) Pe(n) Bg(subtitle) Z(102) Op(0) Trsde(0.4s) T(50%) Start(50%) visible_Op(1) visible_Pe(a) visible_Trsde(1.4s)">
                    <h3 className="C(subtitle) Pos(a) Fz(14px) P(10px) T(0)">{this.props.product.title}</h3>
                    {this.props.product.id && <img className="W(100%) H(500px)" src={"http://" + this.state.farm + "/" + this.props.product.server + "/" + this.props.product.id + "_" + this.props.product.secret + "_q.jpg"} alt={this.props.product.title} />}
                    <span className="close Pos(a) P(10px) Fz(28px) C(subtitle) Cur(p) T(0) End(0) Bgc(#fff.1)" onClick={this.closeClickHandler}>×</span>
                </div>
            </div>
        )
    }

});

module.exports = Overlay;