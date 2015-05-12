var React = require("react");

// Export the ReactApp component
var Filters = React.createClass({

    render: function () {
        var t = this,
            checked;

        var categories = t.props.categories.map(function (category, index) {
            checked = category.value;
            return (
                <label className="D(b) Fz(15px) Lh(1.4em)"><input className="Mend(10px)" type="checkbox" name="category" value={category.name} checked={checked} />{category.title}</label>
            )
        });
        return (
            <div className="filters Bxz(bb) W(190px) Bg(subtitle) Pos(f) Ta(start) C(filters) Op(0) Pe(n) Bdrs(3px)">
                <form>
                    <div className="filter-criteria D(b) My(10px)">
                        <span className="D(b) Fz(14px) Fw(b) My(10px">Category</span>
                        {categories}
                    </div>
                    <button className="Bdrs(2px) C(subtitle) Fx(13px) P(10px) M(10px) Cur(p) Fw(b)">Clear filters</button>
                </form>
            </div>
        )
    }

});

module.exports = Filters;