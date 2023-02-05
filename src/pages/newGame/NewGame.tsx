import React, { useState } from "react";
import "./NewGame.css";

const NewGame: React.FC = () => {
  const [gameName, setGameName] = useState("");
  const [votingSystem, setVotingSystem] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Game name: ${gameName}`);
    console.log(`Voting system: ${votingSystem}`);
  };

  return (
    <div className="NewGame">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6" id="NewGameBody">
          <p>Choose a name for your game.</p>
          <form onSubmit={handleSubmit} className="Form">
            <div className="FormGroup">
              <input
                type="text"
                required={true}
                id="gameName"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
              />
              <span>Name</span>
            </div>
            <button type="submit" className="RoundedButton">
              Create game
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewGame;
