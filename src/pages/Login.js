import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword } from '../database';
import '../scss/login.scss';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (props.user.email) {
      navigate('/dashboard');
    }
  }, [props.user.email]);

  async function handleLogin() {
    console.log('login started...');
    const user = await logInWithEmailAndPassword(email, password);
    console.log(user);
    if (user) {
      props.setUser(user);
      props.setLoading(true);
      window.location.pathname = '/dashboard';
    }
  }

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => handleLogin()}
        >
          Login
        </button>
        <div>
          <Link to="/resetpassword">Forgot Password</Link>
        </div>
        <div>
          Don&apos;t have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Login;
