
const COHORT = "2308-ACC-PT-WEB-PT-A";
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${baseUrl}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSinglePlayer(id) {
  try {
    const response = await fetch(`${baseUrl}/players/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//
// export async function fetchTeams() {
//   try {
//     const response = await fetch(`${baseUrl}/teams`);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }


export async function createPlayer(ob) {
  
  try {
    const response = await fetch(`${baseUrl}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ob)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//
// export async function createTeam(name) {
//   try {
//     const response = await fetch(`${baseUrl}/teams`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         name
//       })
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function deletePlayer(id) {
  try {
    const response = await fetch(`${baseUrl}/players/${id}`, {
      method: "DELETE"
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

