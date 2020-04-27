import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions/actions';

function getVisibleTodos (todoItemsArray, filter) {
  console.log('getVisibleTodos Container Component for TodoList', todoItemsArray, filter)
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return todoItemsArray
    
    case VisibilityFilters.SHOW_COMPLETED:
      return todoItemsArray.filter(todo => todo.completed)

    case VisibilityFilters.SHOW_ACTIVE:
      return todoItemsArray.filter(todo => !todo.completed)

    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

function mapStateToProps(state) {
  console.log('getVisibleTodos container component for TodoList mSTP', state)
  return {
    todoItemsArray: getVisibleTodos(state.todoItemsArrayReducer, state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);