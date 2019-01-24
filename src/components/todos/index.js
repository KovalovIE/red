import { connect } from 'react-redux';
import component from './component';

import * as selectors from './selectors';
import * as filterSelectors from '../filter/selectors';
import * as actions from './actions';
import {SHOW_COMPLETED, SHOW_NOT_COMPLETED} from "../filter/constants";

const mapStateToProps = state => ({
    todos: selectors.getTodos(state),
    currentFilter: filterSelectors.getCurrentFilter(state)
});

const mapDispatchToProps = {
    onDelete: actions.removeTodo,
    onStatusChange:  actions.changeStatus,
    addTodo: actions.addTodo
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { todos, currentFilter } = stateProps;
    let newTodos = todos;
    if (currentFilter === SHOW_COMPLETED) {
        newTodos = todos.filter(todo => todo.status);
    } else if (currentFilter === SHOW_NOT_COMPLETED) {
        newTodos = todos.filter(todo => !todo.status)
    }

    return {
        ...stateProps,
        todos: newTodos,
        ...dispatchProps,
        ...ownProps
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(component);
