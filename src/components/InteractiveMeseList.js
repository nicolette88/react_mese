import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MeseData from "./MeseData";
import MeseDisplay from "./MeseDisplay";

function InteractiveMeseList() {
  const navigate = useNavigate();

  const passToComponent = (data) => {
    navigate("/test", { state: { title: data } });
  }

  const dispContent = MeseData.map((post) =>
    <ul key={post.id}>
      <li>
        <a onClick={() => { passToComponent(post.title) }}>
          {post.title}
        </a>
      </li>
    </ul >
  );

  return (
    <div>{dispContent}</div>
  );
};

export default InteractiveMeseList;