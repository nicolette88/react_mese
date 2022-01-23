import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../scss/test.scss";
import MeseDisplay from "./MeseDisplay";

const Test = () => {
  const data = useLocation();
  console.log(data.state.title);

  const meseDisp = MeseDisplay(data.state.title);

  return (
    <div className="test">
      <div className="test__container">
        <div>
          {meseDisp}
        </div>
      </div>
    </div>
  );
}

export default Test;