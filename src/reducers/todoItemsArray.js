import { ADD_TODO } from '../actions/actionTypes'

export default function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        }
      ]
    default:
      return state;
  }
}