import React from 'react';
import { TodoItemDiv } from './TodoStyles';

const Todo = props => {
  console.log(props)
  return (
    <TodoItemDiv 
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTodoItem(props.item.id)}
    >
      <p>{props.item.task}</p>
    </TodoItemDiv>
  )
}

export default Todo