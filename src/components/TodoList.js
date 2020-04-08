// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default function ToDoList({todoItems}) {
  console.log(todoItems)
  return (
    todoItems.map(item => {
      return (
        <Todo item={item} key={item.id} />
      )
    })
  )
}
