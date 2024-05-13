
const baseUrl = 'https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-PT-WEB-PT-A';
//
export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${baseUrl}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//
export async function fetchTeams() {
  try {
    const response = await fetch( 
      `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/teams`
    );
    const result = await response.json();
  } catch (err) {
    console.error(err);
  }
}

//
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
