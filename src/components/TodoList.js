import React from 'react';
import Todo from './Todo';
import { TodoListContainer } from './TodoStyles';

const ToDoList = props => {
  return (
    <TodoListContainer>
      {props.todoItemsArray.map(item => {
        return (
          <Todo key={item.id} item={item} toggleTodo={props.toggleTodo} />
        )
      })}
      <button onClick={props.clearCompleted}>Clear Completed Items</button>
    </TodoListContainer>
  )
}

export default ToDoList