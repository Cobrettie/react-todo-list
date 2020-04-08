import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = [
      {
        task: 'test todo list',
        id: 1,
        completed: false
      },
      {
        task: 'test item 2',
        id: 2,
        completed: false
      },
      {
        task: 'test item 3',
        id: 3,
        completed: false
      }
    ]
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm />
        <ToDoList todos={this.state} />
      </div>
    );
  }
}

export default App;
