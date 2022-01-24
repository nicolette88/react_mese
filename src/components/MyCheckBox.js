import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../scss/mycheckbox.scss"
import MeseData from "./MeseData";

const MyCheckBox = () => {
  const navigate = useNavigate();

  const passToComponent = (data) => {
    navigate("/mese", { state: { title: data } });
  }

  const [checkedState, setCheckedState] = useState(
    new Array(MeseData.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="mycheckbox">
      {/* <h3>Select Toppings</h3> */}
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
                    // name={post.title}
                    checked={checkedState[post.id - 1]}
                    onChange={() => handleOnChange(post.id - 1)}
                  />
                  <label htmlFor={post.id}><a onClick={() => { passToComponent(post.title) }}>{post.title}</a></label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div >
  );
}


export default MyCheckBox;