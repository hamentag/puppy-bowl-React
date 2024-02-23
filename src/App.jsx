import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import Teams from "./components/Teams";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [plrs, setPlrs] = useState([]);

  return (
    <div className="App">
      <h1>Puppy Bowl</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </div>
  )
}

export default App
