import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';
import TodoList from './TodoList';

const store = createStore(todoReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
