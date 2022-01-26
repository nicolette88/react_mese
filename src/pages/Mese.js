import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../scss/mese.scss';
import MeseDisplay from '../components/MeseDisplay';
import Ajanlo from '../components/Ajanlo';

const Mese = () => {
  const navigate = useNavigate();

  const data = useLocation();

  const meseDisp = MeseDisplay(data.state.title);

  return (
    <div className="mese">
      <button className="mese_btn" onClick={() => navigate('/dashboard')}>
        Vissza
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
