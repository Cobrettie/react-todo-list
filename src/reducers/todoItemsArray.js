import { ADD_TODO } from '../actions/actionTypes'

const initialState = [
  {
    id: 0,
    task: 'test item 1',
    completed: false
  },
  {
    id: 1,
    task: 'test item 2',
    completed: false
  }
]

export default function todos(state = initialState, action) {
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