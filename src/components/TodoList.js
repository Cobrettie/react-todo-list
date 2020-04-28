import React from 'react';

import Todo from './Todo';

import { TodoListContainer } from './TodoStyles'

const ToDoList = props => {
  console.log('TodoList props', props)
  return (
    <TodoListContainer>
      {props.todoItemsArray.map(item => {
        return (
          <Todo key={item.id} item={item} toggleTodo={toggleTodo(item.id)} />
        )
      })}
      <button onClick={props.clearCompleted}>Clear Completed Items</button>
    </TodoListContainer>
  )
}

export default ToDoList




// Old code when TodoList was a stateful component, now TodoList is a presentational component

// const mapStateToProps = state => {
//   console.log('TodoList mSTP', state)
//   return {
//     todoItemsArray: state.todoItemsArrayReducer
//   }
// }

// export default connect(mapStateToProps, { toggleTodo })(ToDoList)

// toggleTodoItem={props.toggleTodoItem} - prop from the mapped <Todo /> component, used to add toggleTodoItem through props