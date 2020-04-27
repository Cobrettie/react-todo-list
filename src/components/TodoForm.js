import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

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
    this.setState({ [event.target.name]: event.target.value })
    this.props.addTodo(this.state.todoItem)
    this.setState({ todoItem: '' })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    console.log('TodoForm local state', this.state.todoItem)
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
        <button type='submit'>Add</button>
      </form>
    )
  }
}

// this.props.addTodo('test')

function mapStateToProps(state) {
  console.log('TodoForm mSTP', state)
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