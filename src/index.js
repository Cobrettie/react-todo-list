import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducers';
import { addTodo } from './actions/actions';

import App from './App';

const store = createStore(reducer)





console.log('getting initialState', store.getState())

const unsubscribe = store.subscribe(() => console.log('unsibscribe', store.getState))

store.dispatch(addTodo('testing adding to state3'))

unsubscribe()





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
