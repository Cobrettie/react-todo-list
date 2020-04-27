export const ADD_TODO = 'ADD_TODO';

export function addTodo(todoItem) {
  console.log('todoItem action creator', todoItem)
  return {
    type: 'ADD_TODO',
    payload: todoItem
  }
}