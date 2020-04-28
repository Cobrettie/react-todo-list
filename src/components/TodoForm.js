import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

class TodoForm extends React.Component {
  state = {
    todoItem: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
    this.setState({ todoItem: '' })
    if (this.state.todoItem === '') {
      this.props.addTodo('Task')
    } else {
      this.props.addTodo(this.state.todoItem)
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Enter Task</h2>
        <input
          type='text'
          name='todoItem'
          placeholder='Task'
          value={this.state.todoItem}
          onChange={this.handleChange}
        />
        <button type='submit'>Add</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    todoItemsArray: state
  }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);





















 // submitItem = event => {
  //   event.preventDefault()

  //   this.setState({todoItem: ''})

  //   if (this.state.todoItem === '') {
  //     this.props.addItem(event, 'Task')
  //   } else {
  //     this.props.addItem(event, this.state.todoItem)
  //   }
  // }