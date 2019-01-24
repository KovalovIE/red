import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string,
        status: PropTypes.bool
    }).isRequired,
    onDelete: PropTypes.func,
    onStatusChange: PropTypes.func
};

const defaultProps = {
    onDelete: () => {},
    onStatusChange: () => {}
}

const Todo = ({ todo: { id, text, status }, onDelete, onStatusChange }) => {
    const onCheck = e => onStatusChange(id, e.target.checked);
    const onRemove = () => onDelete(id);

    return (
        <div className="todo">
            <div className="status-wrapper">
                <input type="checkbox" onClick={onCheck} checked={status} />
            </div>
            <div className="text-wrapper">
                <input type="text" value={text} readOnly />
            </div>
            <div className="button-wrapper">
                <button onClick={onRemove}>Delete</button>
            </div>
        </div>
    )
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;

