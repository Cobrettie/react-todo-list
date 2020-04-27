import React from 'react';
import { TodoItemDiv } from './TodoStyles';

const Todo = props => {
  console.log('Todo component props', props)
  return (
    <TodoItemDiv 
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTodoItem(props.item.id)}
    >
      <p>{props.item.todoItem}</p>
    </TodoItemDiv>
  )
}

export default Todo