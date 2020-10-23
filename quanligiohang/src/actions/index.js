import * as types from '../constants/ActionType';

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CARD,
        product,
        quantity
    }
};
export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const onDeleteProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const onUpdateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}