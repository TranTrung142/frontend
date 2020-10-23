import React, { Component } from 'react';

class Product extends Component {
    render() {
        let {id} = this.props.match.params;
        return (
            <div>
                chi tiet sp co id : {id}
            </div>
        );
    }
}

export default Product;