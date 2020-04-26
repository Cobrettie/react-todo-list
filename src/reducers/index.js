const initialState = [
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

export function reducer(state = initialState, action) {
  console.log('reducer state', state)
  return state;
}