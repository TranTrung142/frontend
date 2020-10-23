import React, { Component } from 'react';
import {connect} from 'react-redux';

import Carts from '../components/Carts';
import CartItem from '../components/CartItem';
import * as message from '../constants/Message';
import CartResult from '../components/CartResult';
import {onDeleteProductInCart, changeMessage, onUpdateProductInCart} from '../actions/index';

class CartContainer extends Component {
    showCartItem = (carts)=>{
        let result = <tr>
            <td>{message.MSG_CART_EMPTY} </td>
        </tr>;
        let {onChangeMessage, onDeleteProductInCart, onUpdateProductInCart} = this.props;
        if(carts.length > 0){
            result = carts.map((item, index)=>{
                return <CartItem 
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
            })
        }
        return result;
    }
    showTotalAmount = (carts)=>{
        let result ;
        if(carts.length > 0){
            result = <CartResult 
                        carts={carts}
                    />
        }
        return result;
    }
    render() {
        let {carts} = this.props;
        return (
            <Carts>
                {this.showCartItem(carts)}
                {this.showTotalAmount(carts)}
            </Carts>
        );
    }
}

let mapStateToProps = state => {
    return {
        carts: state.carts
    }
}
let mapDispatchToProps = (dispatch, props)=>{
    return {
        onDeleteProductInCart: (product)=>{
            dispatch(onDeleteProductInCart(product))
        },
        onChangeMessage: (message)=>{
            dispatch(changeMessage(message))
        },
        onUpdateProductInCart: (product, quantity)=>{
            dispatch(onUpdateProductInCart(product, quantity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);