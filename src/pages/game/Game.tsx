import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Game.css";

const Game = () => {
  let navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  let { id } = useParams();

  return (
    <div className="Game">
      <div>
        <button onClick={() => setShowPopup(true)}>Show Popup</button>
        {showPopup && (
          <div className="overlay">
            <div className="popup">
              <h3 className="popup-title">Choose your display name</h3>
              <input type="text" className="popup-input" required={true} />
              <span className="label">Name</span>
              <button className="popup-button">Continue to game</button>
              <span className="close-popup" onClick={() => setShowPopup(false)}>
                &times;
              </span>
            </div>
          </div>
        )}
      </div>
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
