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
  },
]

export default function todoItemsArrayReducer(state = initialState, action) {
  console.log('todoItemsArrayReducer action', action)

  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          todoItem: action.todoItem,
          completed: false,
        }
      ]

      case 'TOGGLE_TODO':
        return state.map(
          todo => todo.id === action.id ? {...todo, completed: !todo.completed } : todo
        )

    default:
      return state;
  }
}

// working on TOGGLE TODO