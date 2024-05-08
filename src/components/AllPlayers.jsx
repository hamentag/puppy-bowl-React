
import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../api";
import PlayerListName from "./PlayerListName";
import CreatePlayerForm from "./CreatePlayerForm";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [numPlayers, setNumPlayers] = useState(0);
  const [addNewPlayer, setAddNewPlayer] = useState(false)

  useEffect(() => {
    async function getAllPlayers() {
      const APIResponse = await fetchAllPlayers();
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);

        console.log(APIResponse.data.players.length);
        setNumPlayers(APIResponse.data.players.length);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPlayers();
  }, [numPlayers]); // numPlayers

  const playersToDisplay = searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam)
      )
    : players;

    const match = playersToDisplay.length;

  return (
    <div>
      <div className={addNewPlayer? ' new-player' : ''}>
        <div className="add-new-player" onClick={()=>{setAddNewPlayer(status=>!status)}}>
          {addNewPlayer? <div id="cancel"> &times;</div>
            :  
            <div>Add new player <span id="arrowDown"> &#9660;</span></div>}
        </div>
        {
          addNewPlayer && <CreatePlayerForm players={players} setPlayers={setPlayers} />
        }
      </div>
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
        {searchParam &&
          <p>
            {match === 0 ? <span>No results match</span>
              : match === 1 ? <span><b>{match}</b> result matches </span>
                : <span><b>{match}</b> results match </span>} your search criteria
          </p>
        }
        {!searchParam &&
          <h4>
            Number of players: {numPlayers}
          </h4>
        }
      </div>
      <div className="display-players">
        {error && <p>{error}</p>}
        {playersToDisplay.map((player) => {
          return <PlayerListName key={player.id} player={player} numPlayers={numPlayers} setNumPlayers={setNumPlayers}/>;
        })}
      </div>
      
      
    </div>
  );
}