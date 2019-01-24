import { combineReducers } from 'redux';
import todos from './components/todos/reducer'
import filter from './components/filter/reducer';

export default combineReducers({
    todos,
    filter
})