import React from 'react'

export default function ToDoForm() {
  return (
    <div>
      <h2>Todo Form</h2>
      <form>
        <input placeholder='todo item' />
        <button>Add To List</button>
        <button>Remove Completed Items</button>
      </form>
    </div>
  )  
}