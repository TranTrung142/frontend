import * as types from '../constants/ActionTypes';

let rd = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
let generateID = () => {
    return rd() + rd() + '-' + rd() + '-' + rd() + rd() + '-' + rd();
}
let findID = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    })
    return result;
}

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];

const myReducer = ((state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            // console.log(action);
            let newTask = {
                id: generateID(),
                name: action.task.name,
                status: action.task.status
            };
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            //console.log(action);
            let id = action.id;
            let index = findID(state, id);
            state[index] = {
                    ...state[index],
                    status: !state[index].status
                } //phai update ca object thi state moi chay lai
            localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
});
export default myReducer;