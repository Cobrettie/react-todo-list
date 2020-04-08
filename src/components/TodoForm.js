import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItem: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitItem = event => {
    event.preventDefault()

    this.setState({todoItem: ''})
    this.props.addItem(event, this.state.todoItem)
  }

  render() {
    console.log('TodoForm props', this.props)
    return (
      <form onSubmit={this.submitItem}>
        <input 
          type='text'
          name='todoItem'
          value={this.state.todoItem}
          onChange={this.handleChange}
        />
        <button>Add to list</button>
      </form>
    )
  }
}

export default TodoForm;