let nextTodoId = 5

export function addTodo(todoItem) {
  console.log('todoItem action creator', todoItem)
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    todoItem: todoItem
  }
}

export function toggleTodo(id) {
  console.log('toggleItem action creator', id)
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export function setVisibilityFilter(filter) {
  console.log('setVisibilityFilter', filter)
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const VisibilityFilters = ({
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SET_VISIBILITY_FILTER:  'SET_VISIBILITY_FILTER'
})

// export function showCompleted(todoItem) {
//   console.log('SHOW COMPLETED action', todoItem)
//   return {
//     type: SHOW_COMPLETED,

//   }
// }