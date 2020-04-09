import React from 'react'

export default function Todo(props) {
  console.log(props)
  return (
    <div 
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTodoItem(props.item.id)}
    >
      <h2>{props.item.task}</h2>
      <p>{props.item.id}</p>
    </div>
  )
}