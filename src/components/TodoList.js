import React from 'react';
import Todo from './Todo';

const ToDoList = props => {
  console.log('props', props)
  return (
    <div>
      {props.todoItems.map(item => {
        return (
          <Todo key={item.id} item={item} toggleTodoItem={props.toggleTodoItem} />
        )
      })}
      <button onClick={props.clearCompleted}>Clear Completed Items</button>
    </div>
  )
}

export default ToDoList
