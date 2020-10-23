import * as types from '../constants/actiontypes';
const initialState = {
    list: [{
            id: 1,
            title: "iphone"
        },
        {
            id: 2,
            title: "macbook"
        },
    ],
    activeId: null
};
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_HOBBY:
            return state;
        case types.SET_ACTIVE_HOBBY:
            let newActiveId = action.payload.id;

            return {
                ...state,
                activeId: newActiveId
            };
        default:
            return state;
    }
};
export default hobbyReducer;