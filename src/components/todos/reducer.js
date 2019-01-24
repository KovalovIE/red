import * as constants from './constants';

const initialState = [];

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case constants.REMOVE_TODO:
            return state.filter(todo => todo.id !== payload);

        case constants.CHANGE_STATUS:
            const { id, status } = payload;
            return state.map(todo => todo.id === id ? {...todo, status} : todo );

        case constants.ADD_TODO:
            return [...state, payload];

        default:
            return state;
    }
};