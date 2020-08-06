import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../actions/productActions';

class Filter extends Component {
    render() {
        return !this.props.filteredProducts ? (
            <div>Loading...</div>
        ): (
            <div className="filter">
                <div className="filter-result">{this.props.filteredProducts.length} Products</div>
                <div className="filter-sort">
                    Order{" "}
                    <select 
                        value={this.props.sort} 
                        onChange={(e) => 
                            this.props.sortProducts(
                                this.props.filteredProducts, 
                                e.target.value
                        )}
                    >
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-season">
                    Season{" "}
                    <select 
                        value={this.props.season} 
                        onChange={(e) => 
                            this.props.filterProducts(
                                this.props.products,
                                e.target.value)
                            }
                    >
                        <option value="">ALL</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                    </select>
                </div>
            </div>
        )
    }
}
// the connect function accepts 2 parameters: mapStateToProps, mapping actions
export default connect(
    (state) => ({
        season: state.products.season,
        sort: state.products.sort,
        products: state.products.items,
        filteredProducts: state.products.filteredItems,
}),{
    filterProducts,
    sortProducts
})(Filter);
