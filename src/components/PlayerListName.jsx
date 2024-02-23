
import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../api";

export default function PlayerListName({ player, numPlayers,setNumPlayers }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deletePlayer(player.id);
      console.log(result);
      
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    setNumPlayers((num)=>num-1);
  }

  return (
    <div className="player-presentation">
      <h3>{player.name}</h3>
      <button
        onClick={() => {
          navigate(`/${player.id}`);
        }}
      >
        See Details
      </button>
      <button onClick={handleDelete}>Delete Player</button>
    </div>
  );
}
