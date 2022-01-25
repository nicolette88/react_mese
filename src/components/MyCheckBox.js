import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateUserData } from '../database';
import '../scss/mycheckbox.scss';
import MeseInterests from '../components/MeseInterest';

const loadStringData = (value) => {
  var array = value.split(',');
  var resArray = [];
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (array[arrayIndex] == 'true') {
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

const MyCheckBox = (props) => {
  const [checkedState, setCheckedState] = useState(
    new Array(MeseInterests.length).fill(false)
  );

  // const update = () => {
  //   console.log(toStringData(MeseInterests.length, checkedState));
  //   updateUserData(props?.email, toStringData(MeseInterests.length, checkedState));
  // };

  var inerestList = '';

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
    inerestList = tmpData;
  };

  return (
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
                    // name={name}
                    // name={post.title}
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
      {/* <button className="mycheckbox__btn" onClick={update}>
        Save
      </button> */}
    </div >
  );
};


export default MyCheckBox;