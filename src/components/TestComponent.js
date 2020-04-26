import React from 'react';
import { connect } from 'react-redux';

function TestComponent(props) {
  return (
    <div>
      <h2>TestComponent</h2>
      {props.todoArray.map(item => (
        <p key={item.id}>{item.task}</p>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  console.log('mSTP state', state)
  return {
    todoArray: state
  }
}

export default connect(mapStateToProps, {})(TestComponent)
