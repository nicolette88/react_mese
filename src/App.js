import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './scss/style.scss';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import Mese from './pages/Mese';
import LoadingPage from './pages/LoadingPage';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword } from './database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

async function loginStatus() {
  // https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user                    
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, user => {
      if (user) {
        resolve(user);
      } else {
        console.log('no user');
        reject({});
      }
    });
  });
}

const App = () => {
  const [user, setUser] = useState(0);
  const [loading, setLoading] = useState(true);
  async function getUser() {
    try {
      const currentUser = await loginStatus();
      console.log('existing user: ', currentUser);
      if (currentUser) {
        setUser(currentUser);
      }
    } catch {
      setUser({});
    }
  }
  useEffect(() => {
    console.log('app loaded');
    getUser();
  }, []);

  useEffect(() => {
    console.log('user state changed');
    if (user !== 0) setLoading(false);
  }, [user]);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoadingPage user={user} loading={loading} />} />
          <Route exact path="login" element={<Login user={user} setUser={setUser} setLoading={setLoading} />} />
          <Route exact path="register" element={<Register user={user} setUser={setUser} />} />
          <Route exact path="resetpassword" element={<ResetPassword />} />
          <Route exact path="dashboard" element={<Dashboard user={user} loading={loading} setUser={setUser} />} />
          <Route exact path="mese" element={<Mese />} />
        </Routes>
      </Router>
      <img className="banner-image" src="./img/banner_image.png" alt="" />
    </div>
  );
};
export default App;


