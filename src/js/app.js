"use strict";

var React = require("react"),
    Router = require("react-router"),
    App = require("./components/App.jsx"),
    Products = require("./components/Products.jsx"),
    Overlay = require("./components/Overlay.jsx"),
    ErrorComponent = require("./components/Error.jsx"),
    ProductActions = require("./actions/ProductActions"),
    CategoryActions = require("./actions/CategoryActions");

var {Route, DefaultRoute, NotFoundRoute} = Router;

ProductActions.receiveProducts(JSON.parse(document.getElementById("initial-state").innerHTML));
CategoryActions.receiveCategories([{
        id: 1,
        name: "nature",
        value: false,
        title: "Nature"
    },
    {
        id: 2,
        name: "people",
        value: false,
        title: "People"
    }]);

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Products}/>
        <Route name="product" path="product/:productId" handler={Overlay}/>
        <Route name="filters" path="filters/:filters" handler={Products}/>
        <NotFoundRoute name="notfound" handler={ErrorComponent}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(
        <Handler/>,
        document.getElementById("react-app")
    );
});
