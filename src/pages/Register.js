import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '../database';
import '../scss/register.scss';
import '../scss/mycheckbox.scss';
import MeseInterests from '../components/MeseInterest';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [addr, setAddr] = useState('');
  const [phone, setPhone] = useState('');
  const [inerest, setInerest] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    if (!name) alert('Please enter name');
    try {
      await registerWithEmailAndPassword(name, addr, phone, email, password, inerest);
      window.location.pathname = '/dashboard';
    } catch (e) {
      console.log(e);
    }
  };
  const [checkedState, setCheckedState] = useState(
    new Array(MeseInterests.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const tmpData = updatedCheckedState.reduce(
      (nev, currentState, index) => {
        if (currentState === true) {
          return nev + MeseInterests[index].category + ', ';
        }
        return nev;
      },
      ''
    );
    setInerest(tmpData);
  };

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Teljes Név"
        />
        <input
          type="text"
          className="register__textBox"
          value={addr}
          onChange={(e) => setAddr(e.target.value)}
          placeholder="Lakcím"
        />
        <input
          type="text"
          className="register__textBox"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefon/Mobil"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {/* <MyCheckBox /> */}
        <div className="mycheckbox">
          <ul className="toppings-list">
            {MeseInterests.map((post) => {
              return (
                <li key={post.id}>
                  <div className="toppings-list-item">
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={post.id - 1}
                        checked={checkedState[post.id - 1]}
                        onChange={() => handleOnChange(post.id - 1)}
                      />
                      <label htmlFor={post.id}>{post.category}</label>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

        </div >
        <br></br>
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div >
  );
}
export default Register;
