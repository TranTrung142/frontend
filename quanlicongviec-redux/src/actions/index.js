import * as types from '../constants/ActionTypes';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};
export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task: task
    }
}
export const onToggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const onShowForm = () => {
    return {
        type: types.SHOW_FORM
    }
}
export const onCloseForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}
export const updateStatusTask = (id) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id
    }
}