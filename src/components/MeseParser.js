import React, { Component } from "react";
import MeseData from "./MeseData";

const filterTitleData = (data, query) => {
  if (!query) {
    return data;
  }

  return data.filter((post) => {
    const postName = post.title.toLowerCase();
    return postName.includes(query);
  });
};

const handleClick = () => {
  return (
    <div>
      <p>NEEE</p>
    </div>
  );
}

function MeseParser() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const filteredTitleData = filterTitleData(MeseData, query);

  return (
    <ul>
      {filteredTitleData.map(post => (
        <li
          key={post.id}
          onClick={() => { handleClick() }}
        >
          {post.title}
          {/* {post.content} */}
        </li>
      ))}
    </ul>
  );
};

export default MeseParser;