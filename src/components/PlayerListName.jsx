import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../api";

export default function PlayerListName({ player,setNumPlayers }) {
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
      <img className="avatar" src={player.imageUrl} alt={'image of ' + player.name} />
      <div className="buttons">
      <button
        onClick={() => {
          navigate(`/${player.id}`);
        }}
      >
        See Details
      </button>
      <button onClick={handleDelete}>Delete Player</button>
      </div>
    </div>
  );
}
