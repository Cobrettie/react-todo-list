import { addTodo } from '../actions/actions'

const initialState = [
  {
    id: 0,
    todoItem: 'test item 1',
    completed: false
  },
  {
    id: 1,
    todoItem: 'test item 2',
    completed: false
  }
]

export default function todoItemsArray(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          todoItem: action.todoItem,
          completed: false,
        }
      ]
    default:
      return state;
  }
}