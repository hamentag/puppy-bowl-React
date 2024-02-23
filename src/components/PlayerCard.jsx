
import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../api";

export default function PlayerCard({ player }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deletePlayer(player.id);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <figure>
        <img
          src={player.imageUrl}
          alt="A pic of a furry player"
          height={300}
        />
        <figcaption>
          <p>Name: {player.name}</p>
          <p>Breed: {player.breed}</p>
          <p>Team ID: {player.teamId}</p>
          <p>img: {player.imageUrl}</p>
        </figcaption>
      </figure>
      <button onClick={handleDelete}>Delete Player</button>
    </div>
  );
}
