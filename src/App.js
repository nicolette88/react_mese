import React from 'react';
import './scss/style.scss';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <>
      <Header />
      <AddTodo />
    </>
  );
};
export default App;
