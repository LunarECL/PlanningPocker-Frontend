import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import "./App.css";
import "./styles/cols.css";
import NewGame from "./pages/newGame/NewGame";
import Game from "./pages/game/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new-game" element={<NewGame />} />
          <Route path="/:id" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
