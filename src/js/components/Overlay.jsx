/** @jsx React.DOM */

var React = require("react");

// Export the ReactApp component
var Overlay = React.createClass({

    getInitialState: function () {
        return {
            farm: "farm7.staticflickr.com"
        };
    },

    closeClickHandler: function () {
        this.props.onClose();
    },

    render: function () {
        return (
            <div className="single-product page Z(100)">
                <div className="overlay W(100) Pos(f) Bg(overlayBg) Z(100) Trs(0.4s)"></div>
                <div className="preview-large">
                    <h3 class="C(subtitle) Pos(a) Fz(14px) P(10px)">{this.props.product.title}</h3>
                    {this.props.product.id && <img className="W(100) H(500px)" src={"http://" + this.state.farm + "/" + this.props.product.server + "/" + this.props.product.id + "_" + this.props.product.secret + "_q.jpg"} alt={this.props.product.title} />}
                    <span className="close" className="Pos(a) P(10px) Fz(28px) C(subtitle) Cur(p)" onClick={this.closeClickHandler}>×</span>
                </div>
            </div>
        )
    }

});

module.exports = Overlay;