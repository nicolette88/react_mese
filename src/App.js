import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './scss/style.scss';
// firebase import
// import firebase from 'firebase/app'
// import 'firebase/firestore';
// import config from './db_config';

// import Header from './components/Header';
// import AddTodo from './components/AddTodo';
// import SearchBar from './components/Search';
// import MeseParser from './components/MeseParser';
// import MeseData from './components/MeseData';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ResetPassword from './components/ResetPassword';
// import MeseDisplay from './components/MeseDisplay';
// import InteractiveMeseList from './components/InteractiveMeseList';
import Test from './components/test';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;


