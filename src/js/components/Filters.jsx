var React = require("react");

// Export the ReactApp component
var Filters = React.createClass({

    render: function () {
        var t = this,
            checked;

        var categories = t.props.categories.map(function (category, index) {
            checked = category.value;
            return (
                <label><input type="checkbox" name="category" value={category.name} checked={checked} />{category.title}</label>
            )
        });
        return (
            <div className="filters">
                <form>
                    <div className="filter-criteria">
                        <span>Category</span>
                        {categories}
                    </div>
                    <button>Clear filters</button>
                </form>
            </div>
        )
    }

});

module.exports = Filters;