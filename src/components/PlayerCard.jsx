import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../api";

export default function PlayerCard({ player }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deletePlayer(player.id);
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
          alt="pic of a player"
          className="single-player-image"
        />
        <figcaption>
          <table border="1">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{player.name}</td>
              </tr>
              <tr>
                <th scope="row">Breed</th>
                <td>{player.breed}</td>
              </tr>
              <tr>
                <th scope="row">Team</th>
                <td>{player.teamId}</td>
              </tr>
              <tr>
                <th scope="row">Status</th>
                <td>{player.status}</td>
              </tr>
            </tbody>
          </table>
        </figcaption>
      </figure>
      <button onClick={handleDelete} className="delete-btn">Delete Player</button>
    </div>
  );
}
