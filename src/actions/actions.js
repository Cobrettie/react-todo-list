const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(todoItem) {
  console.log('todoItem action creator', todoItem)
  return {
    type: ADD_TODO,
    todoItem: todoItem
  }
}

export function toggleTodo(todoItem) {
  console.log('toggleItem action creator', todoItem)
  return {
    type: TOGGLE_TODO,
    todoItem: todoItem
  }
}