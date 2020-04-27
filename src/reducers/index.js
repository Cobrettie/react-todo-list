import { combineReducers } from 'redux';
import todoItemsArray from './todoItemsArray';

export const initialState = {
  todoItems: [
    {
      id: 0,
      task: 'test item 1 ',
      completed: false
    },
    {
      id: 1,
      task: 'testy item 2',
      completed: false
    }
  ]
}

export const reducer = combineReducers({
  todoItemsArray
})