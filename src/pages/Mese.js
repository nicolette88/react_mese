import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../scss/mese.scss';
import MeseDisplay from '../components/MeseDisplay';

const Mese = () => {
  const navigate = useNavigate();

  const data = useLocation();
  console.log(data.state.title);

  const meseDisp = MeseDisplay(data.state.title);

  return (
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
  );
};

export default Mese;
