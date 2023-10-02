import React from 'react';

import Home from './page/Home';
import Game from './page/Game';
import ScoreBoard from './page/ScoreBoard';

import {
  BrowserRouter,
  Route,
  // Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/ScoreBoard" element={<ScoreBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
