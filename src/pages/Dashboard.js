import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { query, collection, getDocs, where, limit } from 'firebase/firestore';
import {
  auth,
  db,
  logout,
  updateFavorites,
  updateMarkedAsRead
} from '../database';
import '../scss/dashboard.scss';
import '../scss/mycheckbox.scss';
import Mese from './Mese';
import MeseData from '../components/MeseData';


const loadStringData = (value) => {
  var resArray = [];
  var array = value.split(',');

  for (var i = 0; i < array.length; i++) {
    if (array[i].trim() === String('true').trim()) {
      resArray.push(true);
    } else {
      resArray.push(false);
    }
  }
  return resArray;
};

const toStringData = (length, value) => {
  var stateString = '';
  for (var i = 0; i < length; i++) {
    stateString += value[i];
    if (i < length - 1) {
      stateString += ', ';
    }
  }
  return stateString;
};

function Dashboard(props) {
  const [checkedState, setCheckedState] = useState(
    new Array(MeseData.length).fill(false)
  );
  const [name, setName] = useState('');
  const [readMese, setReadMese] = useState('')
  const [favoritesMese, setfavoritesMese] = useState('');
  const [interestsMese, setInterestsMese] = useState('');
  const navigate = useNavigate();
  var probaStr = "";

  const fetchUserName = async () => {
    if (props.loading) return;
    try {
      console.log('fetching', props.user.email);
      const q = query(collection(db, 'users'), where('email', '==', props.user?.email), limit(1));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      console.log(data);
      setName(data.name);
      setReadMese(data.markedAsRead);
      probaStr = data.markedAsRead;
      setInterestsMese(data.interests);
      if (typeof data.favorites !== 'undefined' || data.favorites !== null) {
        var chekListInit = loadStringData(data.favorites);
        for (var i = 0; i < checkedState.length; i++) {
          checkedState[i] = chekListInit[i] || false;
        }
        handleOnChange();
        console.log('checkList values: ' + chekListInit);
      }
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

  const update = () => {
    console.log(toStringData(MeseData.length, checkedState));
    updateFavorites(props.user.email, toStringData(MeseData.length, checkedState));
  };

  const updateTitleStatus = (data, id) => {
    if (!data.includes(id)) {
      var newData = data + ', ' + id;
      console.log("new data: " + newData);
      updateMarkedAsRead(props.user.email, newData);
    };
  };

  const passToComponent = (data, dataReferral, readMeseAktual) => {
    console.log('Title: ' + data.title + ' |Referral: ' + dataReferral);
    console.log('postID: ' + data.id);

    console.log("target" + readMeseAktual + ", " + data.id);
    // setReadMese(data.id.toString());
    updateTitleStatus(readMeseAktual, data.id.toString());
    navigate('/mese', { state: { title: data.title, referral: dataReferral } });
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div>
          <h1>Mesék</h1>
        </div>
        <div className="mycheckbox">
          <ul className="toppings-list">
            {MeseData.map((post) => {
              return (
                <li key={post.id}>
                  <div className="toppings-list-item">
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={post.id - 1}
                        // name={name}
                        name={post.title}
                        checked={checkedState[post.id - 1]}
                        onChange={() => handleOnChange(post.id - 1)}
                      />
                      <label htmlFor={post.id}>
                        <a onClick={() => { passToComponent(post, interestsMese, readMese); }}>
                          {readMese.includes(post.id) ? <em>{post.title}</em> : <b>{post.title}</b>}
                        </a>
                      </label>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <button className="dashboard__btn" onClick={update}>
            Save
          </button>
        </div >
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
