import * as types from '../constants/actiontypes';
export const addNewHobby = (hobby) => {
    return {
        type: types.ADD_HOBBY,
        payload: hobby
    }
}
export const setActiveHobby = (hobby) => {
    return {
        type: types.SET_ACTIVE_HOBBY,
        payload: hobby
    }
}