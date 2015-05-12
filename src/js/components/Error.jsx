/** @jsx React.DOM */

var React = require("react");

// Export the ReactApp component
var Error = React.createClass({

    render: function () {
        return (
            <div className="error page Op(0) Pos(a) W(100%) T(100px) Start(0) Pe(n) Trsde(0.6)">
                <h3 className="Fz(40px)">Sorry, something went wrong :(</h3>
            </div>
        )
    }

});

module.exports = Error;