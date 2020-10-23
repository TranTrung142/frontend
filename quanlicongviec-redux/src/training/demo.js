import {createStore} from 'redux';

import {status, sort } from './actions/index';
import myReducer from './reducers/index';

let store = createStore(myReducer);
console.log('default: ',store.getState());

store.dispatch(status());
console.log("TOGGLE_STATUS: ", store.getState());

store.dispatch(sort({
    by: 'status',
    value: -1
}));
console.log("SORT: ", store.getState());