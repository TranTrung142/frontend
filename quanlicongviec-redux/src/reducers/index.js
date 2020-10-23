import { combineReducers } from 'redux';
//import { listAll } from '../actions/index';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';

const myReducer = combineReducers({
    tasks: tasks,
    isDisplayForm: isDisplayForm
});
export default myReducer;