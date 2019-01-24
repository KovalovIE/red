import { SET_FILTER, SHOW_ALL } from './constants';

const initialState = SHOW_ALL;

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_FILTER:
            return payload;

        default:
            return state;
    }
}