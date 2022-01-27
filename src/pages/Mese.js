import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../scss/mese.scss';
import MeseDisplay from '../components/MeseDisplay';
import Ajanlo from '../components/Ajanlo';



const Mese = () => {
  const navigate = useNavigate();

  const data = useLocation();

  const meseDisp = MeseDisplay(data.state.title);

  function changeToDarkMode() {
    document.body.style.backgroundColor = "black";
    document.getElementsByClassName("mese")[0].lastChild.style.backgroundColor = "black";
    document.getElementsByClassName("mese")[0].lastChild.style.color = "white";
  };

  function changeToLightMode() {
    document.body.style.backgroundColor = "#fff0cb";
    document.getElementsByClassName("mese")[0].lastChild.style.backgroundColor = "#fff0cb";
    document.getElementsByClassName("mese")[0].lastChild.style.color = "#be0000";
  };

  function navigateToDashboard() {
    changeToLightMode();
    navigate('/dashboard');
  }

  return (
    <div className="mese">
      <button className="mese_btn" onClick={() => navigateToDashboard()}>
        Vissza
      </button>
      <button className="este_btn" onClick={() => changeToDarkMode()}>
        <img className='moon-image' src="./img/moon_icon.png" />
      </button>
      <button className="nappal_btn" onClick={() => changeToLightMode()}>
        <img className='sun-image' src="./img/sun_icon.png" />
      </button>
      <div className="mese_container">
        <div>
          {meseDisp}
        </div>
        <div className='ajanlo'>
          <h2>Meseajánló</h2>
          <Ajanlo referral={data.state.referral} />
        </div>
      </div>
    </div>
  );
};

export default Mese;
