const initialState = [
  {
    id: 0,
    todoItem: '',
    completed: false
  },
  {
    id: 1,
    todoItem: 'test item 2',
    completed: false
  },
]

export default function todoItemsArrayReducer(state = [], action) {
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

      case 'SHOW_COMPLETED':
        return state.filter(item => console.log('SHOW_COMPLETED case from reducer', item))
      
      case 'CLEAR_COMPLETED':
        return state.filter(todo => {
          if(todo.completed === false) {
            return todo.todoItem
          }
        })

    default:
      return state;
  }
}