import React from 'react';
import { TodoItemDiv } from './TodoStyles';

const Todo = props => {
  return (
    <TodoItemDiv 
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTodo(props.item.id)}
    >
      <p>{props.item.todoItem}</p>
    </TodoItemDiv>
  )
}

export default Todo