import React, { useEffect, useState } from 'react';
import { auth, logInWithEmailAndPassword } from '../database';
import { Link, useNavigate } from 'react-router-dom';


const LoadingPage = props => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('loading page loaded');
    if (props.user.email) {
      navigate('dashboard');
    }
    if (props.loading === false && !props.user.email) {
      navigate('login');
    }
  }, [props.loading, props.user.email]);
  return (<div>Töltés...</div>);
};

export default LoadingPage;
