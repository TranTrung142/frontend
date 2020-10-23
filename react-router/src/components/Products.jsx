import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    showProducts = (products, url) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <NavLink to={`${url}/${product.id}`} key={index}>
                        <div className="card" >
                            <div className="card-body">
                                <h4 className="card-title">{product.name} </h4>
                                <p className="card-text">{product.id} </p>
                            </div>
                        </div>
                    </NavLink>

                );
            });
        }
        return result;
    }
    render() {
        let products = [
            {
                id: 1,
                name: 'iphone',
            },
            {
                id: 2,
                name: 'sumsung',
            },
            {
                id: 3,
                name: 'xiaomi',
            },
        ]
        let {match} = this.props;
        let url = match.url;
        return (
            <div className="text-center container">
                <h1>List product</h1>
                <div className="card-group">
                    {this.showProducts(products, url)}
                </div>
                <div>
                    <Route path={`${url}/:id`} exact component={Product} />
                </div>
            </div>
        );
    }
}

export default Products;