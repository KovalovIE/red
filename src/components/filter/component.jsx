import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED, RADIO_NAME } from './constants';
import './styles.css';

const propTypes = {
    currentFilter: PropTypes.string,
    setFilter: PropTypes.func,
};

const defaultProps = {
    currentFilter: SHOW_ALL,
    setFilter: () => {}
};

class Filter extends Component {
    onSelect = e => {
        const { setFilter } = this.props;

        setFilter(e.target.value);
    }

    render() {

        const { currentFilter } = this.props;

        return (
            <div className="filter-wrapper">
                <div className="radio-wrapper">
                    <input
                        id="radio-all"
                        type="radio"
                        name={RADIO_NAME}
                        value={SHOW_ALL}
                        checked={currentFilter === SHOW_ALL}
                        onClick={this.onSelect}
                    />
                    <label for="radio-all">Show all</label>
                </div>
                <div className="radio-wrapper">
                    <input
                        id="radio-completed"
                        type="radio"
                        name={RADIO_NAME}
                        value={SHOW_COMPLETED}
                        checked={currentFilter === SHOW_COMPLETED}
                        onClick={this.onSelect}
                    />
                    <label htmlFor="radio-completed">Show completed</label>
                </div>
                <div className="radio-wrapper">
                    <input
                        id="radio-not-completed"
                        type="radio"
                        name={RADIO_NAME}
                        value={SHOW_NOT_COMPLETED}
                        checked={currentFilter === SHOW_NOT_COMPLETED}
                        onClick={this.onSelect}
                    />
                    <label htmlFor="radio-not-completed">Show not completed</label>
                </div>
            </div>
        )
    }
}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;