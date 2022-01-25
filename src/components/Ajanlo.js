import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MeseData from './MeseData';

const filterAjanlo = (data, query) => {
  if (!query) {
    return data;
  }

  var queryArray = query.split(',');
  return data.filter((post) => {
    const postData = post.tag.toLowerCase();
    var mergeFilter;
    for (var i = 0; i < queryArray.length; i++) {
      if ((queryArray[i] !== ' ') && (queryArray[i] !== '')) {
        mergeFilter = mergeFilter || postData.includes(queryArray[i].trim());
      }
    }
    return mergeFilter;
  });
};

const Ajanlo = (props) => {
  console.log('Interests: ' + props.referral);
  const navigate = useNavigate();

  const passToComponent = (dataTitle, dataReferral) => {
    navigate('/mese', { state: { title: dataTitle, referral: dataReferral } });
  };

  const meseAjanlo = filterAjanlo(MeseData, props.referral);
  const dispContent = meseAjanlo.map((post) =>
    <div key={post.id}>
      <a onClick={() => { passToComponent(post.title, props.referral); }}>{post.title}</a>
    </div>
  );

  return (
    <div>{dispContent}</div>
  );
};

export default Ajanlo;