import React from 'react';
import MeseData from './MeseData';

const filterMese = (data, query) => {
  if (!query) {
    return data;
  }
  return data.filter((post) => {
    const postName = post.title.toLowerCase();
    return postName.includes(query);
  });
};

function MeseDisplay(cim) {
  // const cim = "Installation";
  if (!cim) {
    return 'nincs cim';
  }
  const mese = filterMese(MeseData, cim.toLocaleLowerCase());
  const dispContent = mese.map((post) =>
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );

  return (
    <div>{dispContent}</div>
  );
}

export default MeseDisplay;

