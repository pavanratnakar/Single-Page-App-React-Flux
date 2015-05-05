/** @jsx React.DOM */

var React = require("react"),
    App = require("./components/App.jsx"),
    ProductActions = require("./actions/ProductActions"),
    CategoryActions = require("./actions/CategoryActions");

ProductActions.receiveProducts(JSON.parse(document.getElementById("initial-state").innerHTML));
CategoryActions.receiveCategories([{
        name: "nature",
        value: false,
        title: "Nature"
    },
    {
        name: "people",
        value: false,
        title: "People"
    }]);

React.render(
    <App />,
    document.getElementById("react-app")
);