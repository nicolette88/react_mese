import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../scss/test.scss";

const Test = () => {
  const data = useLocation();
  console.log(data.state);

  return (
    <div className="test">
      <div className="test__container">
        <div>
          <h1>Mesék</h1>
        </div>
        <b>Welcome</b>
        <p>valami</p>
      </div>
    </div>
  );
}

export default Test;