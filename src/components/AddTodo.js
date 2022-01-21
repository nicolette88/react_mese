
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';

const AddTodo = () => {
  // desctructuring:
  // const temp = useState('');
  // const todo = temp[0];
  // const setTodo = temp[1];
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, { title: todo, id: uuidv4() }]);
    }
    setTodo('');
    // console.log(todoList);
  };

  useEffect(() => {
    // ha a todoList értéke megváltozik, akkor ez lefut
    console.log(todoList);
  }, [todoList]);

  const handleRemove = id => {
    const newTodos = todoList.filter(elem => elem.id != id);
    setTodoList(newTodos);
  };

  return (
    <>
      <form
        className="todo-form"
        onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          className="todo-input"
          onChange={e => { setTodo(e.target.value); }} />
        <input
          type="submit"
          className="todo-add"
          value="Add" />
      </form>
      <div>
        <TodoCounter count={todoList.length} />
        <ul className="todo-container">
          {
            todoList.map(todoItem => (
              <TodoItem
                key={todoItem.id}
                id={todoItem.id}
                title={todoItem.title}
                removeHandler={handleRemove} />
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default AddTodo;