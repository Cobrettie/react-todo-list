import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducers';

import App from './App';
import { addTodo } from './actions/actions';

const store = createStore(reducer)

console.log('getting initialState', store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState))

store.dispatch(addTodo('testing adding to state'))

unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
