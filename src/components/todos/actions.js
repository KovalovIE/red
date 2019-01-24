import * as constants from './constants';

export const removeTodo = id => ({
    type: constants.REMOVE_TODO,
    payload: id
});

export const changeStatus = (id, status) => ({
    type: constants.CHANGE_STATUS,
    payload: { id, status }
});

export const addTodo = todo => ({
    type: constants.ADD_TODO,
    payload: todo
})