
import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../api";
import PlayerListName from "./PlayerListName";
import CreatePlayerForm from "./CreatePlayerForm";


export default function Teams() {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);

useEffect(() => {
    async function getAllPlayers() {
      const APIResponse = await fetchAllPlayers();
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPlayers();
  }, []);

const teamIds = [...new Set(players.map(pl => {  
                return pl.teamId
            }))]
            .sort((a, b) => a - b);

console.log(teamIds)
// Display players of each team ...



  return(
    <div>
        <h3>Teams</h3>
        {teamIds.map((teamId, indx) => {    
            return teamId? <p key={indx}>Team {teamId}</p>
                :  <p key={indx}>Unassigned Team</p>
        })}
    </div>
  )
}

