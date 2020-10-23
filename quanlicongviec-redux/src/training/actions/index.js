import * as types from '../constants/ActionTypes';
export const status = () => {
    return {
        type: types.TOGGLE_STATUS
    }
};
export const sort = (sort) => { //(sort, a, b ...)
    return {
        type: types.SORT,
        sort: sort
    }
};