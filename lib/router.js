/* eslint-env */
"use strict";

var fs = require("fs"),
    async = require("async");

module.exports = function (app) {
    var LoadPage = function(req, res) {
        res.type("html");
        res.write("");
        async.auto({
            Init: function (next) {
                next(null, {

                });
            },
            Head: ["Init", function (next) {
                res.render("general/head", {}, next);
            }],
            Main: ["Init", function (next) {
                var products = require("../data/products.json");

                // var markup = React.renderToString(React.createElement(ReactApp, {
                //     products: products
                // }));
                res.render("general/body", {
                    products: JSON.stringify(products)
                }, next);
            }],
            Tail: ["Init", function (next) {
                res.render("general/tail", {}, next);
            }]
        }, function (err, html) {
            if (err) {
                res.write("Error");
            } else {
                res.write(html.Head + html.Main + html.Tail);
            }
            res.end();
        });
    };

    app.get("/react", LoadPage);
};