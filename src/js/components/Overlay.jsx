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
            <div className="single-product page">
                <div className="overlay"></div>
                <div className="preview-large">
                    <h3>{this.props.product.title}</h3>
                    {this.props.product.id && <img src={"http://" + this.state.farm + "/" + this.props.product.server + "/" + this.props.product.id + "_" + this.props.product.secret + "_q.jpg"} alt={this.props.product.title} />}
                    <span className="close" onClick={this.closeClickHandler}>×</span>
                </div>
            </div>
        )
    }

});

module.exports = Overlay;