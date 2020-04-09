import React from 'react';
import Todo from './Todo';
import { TodoListContainer } from './TodoStyles'

const ToDoList = props => {
  console.log('props', props)
  return (
    <TodoListContainer>
      {props.todoItems.map(item => {
        return (
          <Todo key={item.id} item={item} toggleTodoItem={props.toggleTodoItem} />
        )
      })}
      <button onClick={props.clearCompleted}>Clear Completed Items</button>
    </TodoListContainer>
  )
}

export default ToDoList
