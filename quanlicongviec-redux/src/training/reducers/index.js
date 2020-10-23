import sort from './Sort';
import status from './Status';

import { combineReducers } from 'redux';

let myReducer = combineReducers({
    status: status,
    sort: sort
})

export default myReducer;