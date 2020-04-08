import React from 'react'

export default function Todo({item}) {
  const {task, id} = item;
  return (
    <div>
      <h2>{task}</h2>
      <p>{id}</p>
    </div>
  )
}