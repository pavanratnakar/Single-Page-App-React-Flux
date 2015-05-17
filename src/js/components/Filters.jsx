var React = require("react"),
    CategoryActions = require("../actions/CategoryActions.js");

// Export the ReactApp component
var Filters = React.createClass({

    getInitialState: function () {
        return {}
    },

    filterClickHandler: function (e) {
        e.preventDefault();

        var node = $(e.currentTarget),
            id = node.data("cid");

        if (node.is(":checked")) {
            CategoryActions.selectCategory(id);
        } else {
            CategoryActions.deSelectCategory(id);
        }
    },

    resetClickHandler: function (e) {
        e.preventDefault();
        CategoryActions.deSelectCategories(null);
    },

    render: function () {
        var t = this,
            checked = "";

        var categories = t.props.categories.map(function (category) {
            checked = category.value ? "checked" : "";
            return (
                <label key={category.title} className="D(b) Fz(15px) Lh(1.4em)">
                    <input className="Mend(10px)" type="checkbox" name="category" checked={checked} onChange={t.filterClickHandler} data-cid={category.id} />
                    <span>{category.title}</span>
                </label>
            )
        });
        return (
            <div className="filters Bxz(bb) W(190px) Bg(subtitle) Pos(f) Ta(start) C(filters) Op(0) Pe(n) Bdrs(3px) visible_Op(1) visible_Trsde(1s) visible_Pe(a)">
                <form>
                    <div className="filter-criteria D(b) My(10px)">
                        <span className="D(b) Fz(14px) Fw(b) My(10px">Category</span>
                        {categories}
                    </div>
                    <button onClick={t.resetClickHandler} className="Bdrs(2px) C(subtitle) Fx(13px) P(10px) M(10px) Cur(p) Fw(b) Bg(primary) Bd(0)">Clear filters</button>
                </form>
            </div>
        )
    }

});

module.exports = Filters;