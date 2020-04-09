import React from 'react';
import Todo from './Todo';

export default function ToDoList(props) {
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
