import React from "react";
import { useNavigate } from "react-router-dom";

import "./Main.css";

const Main = () => {
  let navigate = useNavigate();

  return (
    <div className="Main">
      <button
        className="RoundedButton"
        onClick={() => {
          navigate("/new-game");
        }}
      >
        Start new Poker
      </button>
    </div>
  );
};

export default Main;
