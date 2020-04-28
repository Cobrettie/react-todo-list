import React from 'react';
import { connect } from 'react-redux';

import { MainAppContainerDiv, MainHeader } from './components/TodoStyles';
import ToDoForm from './components/TodoForm';
import VisibleTodoList  from './ContainerComponents/VisibleTodoList';
import Footer from './components/Footer';
import './components/Todo.css';

class App extends React.Component {
  render() {
    console.log('App props', this.props)
    return (
      <MainAppContainerDiv>
        <MainHeader>To Do</MainHeader>
        <ToDoForm />
        <VisibleTodoList />
        <Footer />
      </MainAppContainerDiv>
    );
  }
}

const mapStateToProps = state => {
  console.log('App mSTP state', state)
  return {
    todoItemsArray: state.todoItemsArrayReducer
  }
}

export default connect(mapStateToProps, {})(App);




// refactor components to use similar naming/styling

// style application

// stretch goals

