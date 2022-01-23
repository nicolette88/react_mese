import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MeseData from "./MeseData";
import MeseDisplay from "./MeseDisplay";

function InteractiveMeseList() {
  const dispContent = MeseData.map((post) =>
    <ul key={post.id}>
      {/* <li><Link to="/test">{post.title}</Link></li> */}
      <Link to={
        {
          pathname: "/test",
          state: { name: "query" }
        }
      }>Proba</Link>
      {/* <li onClick={() => console.log(post.title)}>{post.title}</li> */}
    </ul >
  );

  return (
    <div>{dispContent}</div>
  );
};

export default InteractiveMeseList;