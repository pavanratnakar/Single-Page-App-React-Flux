/** @jsx React.DOM */

var React = require("react");

// Export the ReactApp component
var Product = React.createClass({
    // Set the initial component state
    getInitialState: function (props) {
        return {};
    },

    render: function () {
        return (
            <li data-index={this.props.id} onClick={this.clickHandler}>
                <a href="#" className="product-photo">
                    <img src={"http://" + this.props.farm + "/" + this.props.server + "/" + this.props.id + "_" + this.props.secret + "_q.jpg"} height="150" alt={this.props.title} />
                </a>
                <h2><a href="#">{this.props.title}</a></h2>
                <div className="highlight"></div>
            </li>
        )
    }
});

module.exports = Product;