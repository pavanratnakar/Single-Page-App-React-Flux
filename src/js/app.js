/** @jsx React.DOM */

var React = require("react"),
	App = require("./components/App.jsx"),
	ProductActions = require("./actions/ProductActions");

ProductActions.receiveProducts(JSON.parse(document.getElementById("initial-state").innerHTML));

React.render(
    <App products={[]} />,
    document.getElementById("react-app")
);