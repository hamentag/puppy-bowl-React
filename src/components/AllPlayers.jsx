
import { useState } from "react";

import PlayerListName from "./PlayerListName";
import CreatePlayerForm from "./CreatePlayerForm";

export default function AllPlayers({players, setPlayers, numPlayers, setNumPlayers}) {
  
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [addNewPlayer, setAddNewPlayer] = useState(false);


  const playersToDisplay = searchParam? 
    players.filter((player) =>
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
            <div id="plus"><span> &#43;</span> New player</div>}
        </div>
        {
          addNewPlayer && <CreatePlayerForm players={players} setPlayers={setPlayers} />
        }
      </div>
      <div className="search-block">
        <label>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 24">
            <path d="M21.71 20.29l-5.3-5.3A7.93 7.93 0 0 0 18 10c0-4.41-3.59-8-8-8S2 5.59 2 10s3.59 8 8 8a7.93 7.93 0 0 0 5.59-2.29l5.3 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM4 10a6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6z"/>
          </svg>
          {" "}
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