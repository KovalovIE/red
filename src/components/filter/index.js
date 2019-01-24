import { connect } from 'react-redux';
import component from './component';
import * as actions from './actions';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    currentFilter: selectors.getCurrentFilter(state)
});

const mapDispatchToProps = {
    setFilter: actions.setFilter
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component);