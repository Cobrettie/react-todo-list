import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';
import './components/Todo.css';

const todoItems = [
  {
    task: 'test item 1',
    id: 1,
    completed: false
  },
  {
    task: 'test item 2',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoItems
    }
  }

  addTodoItem = (event, todoItem) => {
    // console.log('event', event, 'todoItem', todoItem)
    event.preventDefault()

    const newTodoItem = {
      task: todoItem,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todoItems: [...this.state.todoItems, newTodoItem]
    })
    // console.log('after adding todoItem', this.state.todoItems)
  }

  toggleTodoItem = itemId => {
    console.log(itemId);

    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault()

    this.setState({
      todoItems: this.state.todoItems.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addItem={this.addTodoItem} />
        <ToDoList 
          todoItems={this.state.todoItems} 
          toggleTodoItem={this.toggleTodoItem}
          clearCompleted={this.clearCompleted}
        /> 
      </div>
    );
  }
}

export default App;




// refactor components to use similar naming/styling

// style application

// stretch goals

