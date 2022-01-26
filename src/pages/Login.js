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
      <div class="main-text">Népmesetár</div>
      <div class="banner-text">
        <p>... ahol a kurta farkú malac túr!</p>
        <h2>A magyar népmesék egy helyen</h2>
        <h2>Regisztrálj, hogy elérd a meséket!</h2>
        <h2>Megjelölheted kedvenceidet!</h2>
        <h2>Próbáld ki a meseajánlónkat is!</h2>
      </div>
      {/* <div class="banner-text2">
        <h2>A magyar népmesék egy helyen</h2>
        <h2>Regisztrálj a testreszabható népmesetárért!</h2>
        <h2>Könnyedén megjelölheted kedvenceidet!</h2>
        <h2>A regisztráció során megadott kategóriák alapján ajánlunk neked meséket!</h2>
      </div> */}
      <div className="login_container">
        <input
          type="text"
          className="login_textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail cím"
        />
        <input
          type="password"
          className="login_textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Jelszó"
        />
        <button
          className="login_btn"
          onClick={() => handleLogin()}
        >
          Belépés
        </button>
        <div>
          <Link to="/resetpassword">Elfelejtett jelszó</Link>
        </div>
        <div>
          Nincs még fiókod? <Link to="/register">Regisztrálj!</Link>
        </div>
      </div>
    </div >
  );
}

export default Login;
