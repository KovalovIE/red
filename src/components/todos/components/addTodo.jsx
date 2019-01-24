import React, { Component } from 'react';
import generateUUID from 'uuid';
import PropTypes from 'prop-types';

const propTypes = {
    addTodo: PropTypes.func,
};

const defaultProps = {
    addTodo: () => {},
};

const initialState = {
    text: ''
};

class AddTodo extends Component {
    constructor(){
        super();

        this.state = initialState;
    }

    onChange = e => this.setState({ text: e.target.value });

    onAdd = () => {
        const { addTodo } = this.props;
        const { text } = this.state;

        const todo = {
            id: generateUUID(),
            text,
            status: false
        };

        addTodo(todo);
        this.setState({ text: '' });
    }

    render() {
        const { text } = this.state;

        return (
            <div className="add-todo">
                <div className="add-input-wrapper">
                    <input type="text" value={text} onChange={this.onChange} />
                </div>
                <div className="button-wrapper">
                    <button onClick={this.onAdd}>Add</button>
                </div>
            </div>
        )
    }
}

AddTodo.propTypes = propTypes;
AddTodo.defaultProps = defaultProps;

export default AddTodo;