import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actionTypes';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItem: ''
    }
  console.log('TodoForm component props, state', props, this.state)
  }

 

handleSubmit = event => {
  event.preventDefault();
  // set new state to array 
  // display new data showing new item
  // this.setState({todoItem: ''})
  addTodo(this.state.todoItem)
  this.setState({ [event.target.name]: event.target.value })
}


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>TodoForm component</h2>
        <input
          type='text'
          name='todoItem'
          placeholder='Task'
          value={this.state.todoItem}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  console.log('TodoForm mSTP', state)
  return {
    todoItemsArray: state
  }
}

export default connect(mapStateToProps, {})(TodoForm);





















 // submitItem = event => {
  //   event.preventDefault()

  //   this.setState({todoItem: ''})

  //   if (this.state.todoItem === '') {
  //     this.props.addItem(event, 'Task')
  //   } else {
  //     this.props.addItem(event, this.state.todoItem)
  //   }
  // }