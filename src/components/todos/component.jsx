import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './components/todo';
import AddTodo from './components/addTodo';


const propTypes = {
    todos: PropTypes.array,
};

const defaultProps = {
    todos: []
};

class TodoList extends Component {
    constructor(){
        super();
    };

    render() {
        const {
            todos,
            onDelete,
            onStatusChange,
            addTodo
        } = this.props;

        return (
            <div className="todo-list">
                <div className="todo-list__wrapper">
                    {
                        todos.map(todo => <Todo
                            todo={todo}
                            onDelete={onDelete}
                            onStatusChange={onStatusChange}
                        />)
                    }
                </div>
                <AddTodo addTodo={addTodo} />
            </div>
        )
    }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;