import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Game = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  return (
    <div className="Game">
      <p>Game id: {id}</p>
      <button
        className="RoundedButton"
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default Game;
