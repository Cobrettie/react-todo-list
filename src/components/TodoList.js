import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { TodoListContainer } from './TodoStyles'

const ToDoList = props => {
  console.log('TodoList props', props)
  return (
    <TodoListContainer>
      {props.todoItems.map(item => {
        return (
          <Todo key={item.id} item={item} />
        )
      })}
      <button onClick={props.clearCompleted}>Clear Completed Items</button>
    </TodoListContainer>
  )
}

const mapStateToProps = state => {
  console.log('TodoList mSTP', state)
  return {
    state
  }
}

export default connect(mapStateToProps, {})(ToDoList)

// toggleTodoItem={props.toggleTodoItem} - prop from the mapped <Todo /> component, used to add toggleTodoItem through props