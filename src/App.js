import React from 'react';
import { connect } from 'react-redux';

import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

import { MainAppContainerDiv, MainHeader } from './components/TodoStyles';
import './components/Todo.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App props', props)
  }

  // addTodoItem = (event, todoItem) => {
  //   // console.log('event', event, 'todoItem', todoItem)
  //   event.preventDefault()

  //   const newTodoItem = {
  //     task: todoItem,
  //     id: Date.now(),
  //     completed: false
  //   }

  //   this.setState({
  //     todoItems: [...this.state.todoItems, newTodoItem]
  //   })
  //   // console.log('after adding todoItem', this.state.todoItems)
  // }

  // toggleTodoItem = itemId => {
  //   console.log(itemId);

  //   this.setState({
  //     todoItems: this.state.todoItems.map(item => {
  //       if (itemId === item.id) {
  //         return {
  //           ...item,
  //           completed: !item.completed
  //         }
  //       }
  //       return item
  //     })
  //   })
  // }

  // clearCompleted = event => {
  //   event.preventDefault()

  //   this.setState({
  //     todoItems: this.state.todoItems.filter(item => !item.completed)
  //   })
  // }

  // <ToDoForm addItem={this.addTodoItem} />


  render() {
    return (
      <MainAppContainerDiv>
        <MainHeader>To Do</MainHeader>
        <ToDoForm />
        <ToDoList 
          todoItems={this.props.todoItemsArray.todoItems} 
          // toggleTodoItem={this.toggleTodoItem}
          // clearCompleted={this.clearCompleted}
        /> 
      </MainAppContainerDiv>
    );
  }
}

const mapStateToProps = state => {
  console.log('App mSTP state', state)
  return {
    todoItemsArray: state
  }
}

export default connect(mapStateToProps, {})(App);




// refactor components to use similar naming/styling

// style application

// stretch goals

