import { useState, useEffect } from "react"; 
export default function Teams({players}) {
  const [teams, setTeams] = useState([]);
  
  useEffect(()=>{
    function groupByTeamId() {
      const grouped = {};
      
      // Group players by teamId
      players.forEach(player => {
          if (!grouped[player.teamId]) {
            grouped[player.teamId] = [];
          }
          grouped[player.teamId].push(player);
      });
      
      // make grouped players as teams
      setTeams(Object.values(grouped))
    }
  groupByTeamId();
}, [players])

  return(     
    <div>
      <ul>
      {
        teams.map((team, tIndex) =>{
          return(
            <li key={tIndex}>
              <h4>Team {tIndex + 1}</h4>
              <ul className="team">
              {
                team.map((player, pIndex) =>{
                  return(
                    <li key={pIndex} className={`on-${player.status}`}> 
                      <div style={{fontWeight:"bold"}}>{player.name} </div>
                      <div>({player.status})</div>
                      <img src={player.imageUrl} alt={`photo player ${player.id}`} />              
                    </li>
                  )
                })
              }
              </ul>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}

