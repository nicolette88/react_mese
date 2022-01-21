import React from 'react';
const TodoItem = props => {
  return (
    <li className="todo-item">{props.title}
      <span className="remove-button"
        onClick={() => { props.removeHandler(props.id); }}
      >
      </span>
    </li>
  );
};
export default TodoItem;