
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../api";
import PlayerCard from "./PlayerCard";

export default function SinglePlayer() {
  const { id } = useParams();

  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSinglePlayer() {
      const APIResponse = await fetchSinglePlayer(id);
      if (APIResponse.success) {
        setPlayer(APIResponse.data.player);
      } else {
        setError(error.message);
      }
    }
    getSinglePlayer();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {player && <PlayerCard player={player} />}
    </div>
  );
}
