/** @jsx React.DOM */

var React = require("react");

// Export the ReactApp component
var Error = React.createClass({

    render: function () {
        return (
            <div className="error page">
                <h3 className="C(title) Pend(20px) Fz(40px)">Sorry, something went wrong :(</h3>
            </div>
        )
    }

});

module.exports = Error;