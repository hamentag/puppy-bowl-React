import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import Teams from "./components/Teams";
import Nav from "./components/Nav";


import { useState, useEffect } from "react";
import { fetchAllPlayers } from "./api";

function App() {
  const [players, setPlayers] = useState([]);
  const [numPlayers, setNumPlayers] = useState(0);

  
  useEffect(() => {
    async function getAllPlayers() {
      const APIResponse = await fetchAllPlayers();
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);
        setNumPlayers(APIResponse.data.players.length);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPlayers();
  }, [numPlayers]);  

  return (
    <div className="App">
      <h1>Puppy Bowl</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<AllPlayers players={players} setPlayers={setPlayers} 
          numPlayers={numPlayers} setNumPlayers={setNumPlayers}/>} />
        <Route path="/:id" element={<SinglePlayer />} />
        <Route path="/teams" element={<Teams players={players} />} />
      </Routes>
    </div>
  )
}

export default App
