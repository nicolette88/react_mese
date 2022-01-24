import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { query, collection, getDocs, where, limit } from 'firebase/firestore';
import { auth, db, logout, updateUserData } from '../database';
import '../scss/dashboard.scss';
import MeseDisplay from '../components/MeseDisplay';
import InteractiveMeseList from '../components/InteractiveMeseList';
import Mese from './Mese';
import MyCheckBox from '../components/MyCheckBox';

function Dashboard(props) {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const update = () => {
    updateUserData(user?.email, 'true, true');
  };

  const fetchUserName = async () => {
    if (props.loading) return;
    try {
      console.log('fetching', props.user.email);
      const q = query(collection(db, 'users'), where('email', '==', props.user?.email), limit(1));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      console.log(data);
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };
  function logOutUser() {
    logout();
    props.setUser({});
    navigate('/login');
  }
  useEffect(() => {
    if (!props.user.email) {
      navigate('/');
    }
    fetchUserName();
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div>
          <h1>Mesék</h1>
        </div>
        <MyCheckBox />
        <button className="dashboard__btn" onClick={update}>
          Save
        </button>
        <br />
        <b>Welcome</b>
        <div>{name}</div>
        <div>{props.user.email}</div>
        <button className="dashboard__btn" onClick={logOutUser}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
