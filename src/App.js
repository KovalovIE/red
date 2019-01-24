import React, { Component } from 'react';
import TodoList from './components/todos';
import Filter from './components/filter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './App.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <TodoList />
            <Filter />
          </div>
        </Provider>
    );
  }
}

export default App;

window.store = store;
