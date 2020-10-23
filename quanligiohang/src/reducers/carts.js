import * as types from '../constants/ActionType';

let data = JSON.parse(localStorage.getItem('carts'));
let initialState = data ? data : [];

const carts = (state = initialState, action) => {
    let { product, quantity } = action;
    let index = -1;
    switch (action.type) {
        case types.ADD_TO_CARD:
            //console.log(action);
            index = findIndex(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findIndex(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findIndex(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}
let findIndex = (state, product) => {
    let index = -1;
    if (state.length > 0) {
        for (let i = 0; i < state.length; i++) {
            if (state[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default carts;