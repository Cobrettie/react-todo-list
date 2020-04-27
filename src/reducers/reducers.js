import { combineReducers } from 'redux';
import todoItemsArrayReducer from './todoItemsArrayReducer';
import visibilityFilter from './visibilityFilter';

export const reducer = combineReducers({
  todoItemsArrayReducer,
  visibilityFilter
})