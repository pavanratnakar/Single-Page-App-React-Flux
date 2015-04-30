/** @jsx React.DOM */

var React = require("react");
var App = require('./components/App.react.jsx');

var products = JSON.parse(document.getElementById('initial-state').innerHTML);

React.render(
    <App products={products} />,
    document.getElementById("react-app")
);