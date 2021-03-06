import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Products from '../components/Products';
import Product from '../components/Product';
import * as actions from '../actions/index';

class ProductsContainer extends Component {
    showProduct=(products)=>{
        let result = products.map((product, index) => {
            return <Product
                key={index}
                product={product}
                onAddToCart={this.props.onAddToCart}
                onChangeMessage={this.props.onChangeMessage}
            />
        })
        return result;
    }
    render() {
        let {products} = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }
}

//check type cua product
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
};
const mapDispatchToProps = (dispatch, props)=>{
    return {
        onAddToCart: (product)=>{
            dispatch(actions.addToCart(product, 1))
        },
        onChangeMessage: (message)=>{
            dispatch(actions.changeMessage(message))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);