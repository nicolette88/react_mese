import React from 'react';
const TodoCounter = props => {
  return <h2>You have {props.count} {
    props.count <= 1 ? 'todo' : 'todos'
  }</h2>;
};
export default TodoCounter;