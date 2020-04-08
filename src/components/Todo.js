import React from 'react'

export default function Todo({item}) {
  const {task, id, completed} = item;
  return (
    <div>
      <h2>{task}</h2>
    </div>
  )
}