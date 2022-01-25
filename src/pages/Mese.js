import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../scss/mese.scss';
import MeseDisplay from '../components/MeseDisplay';
import Ajanlo from '../components/Ajanlo';

const Mese = () => {
  const navigate = useNavigate();

  const data = useLocation();
  // console.log('Proba1: ' + data.state.title);
  // console.log('Proba2: ' + data.state.referral);

  const meseDisp = MeseDisplay(data.state.title);

  return (
    <div>
      <div className="mese">
        <button className="mese__btn" onClick={() => navigate('/dashboard')}>
          Back
        </button>
        <div className="mese__container">
          <div>
            {meseDisp}
          </div>
        </div>
      </div>
      <div className='ajanlo'>
        <h2>Meseajánló</h2>
        <Ajanlo referral={data.state.referral} />
      </div>
    </div>
  );
};

export default Mese;
