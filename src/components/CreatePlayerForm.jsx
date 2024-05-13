
import React, { useState } from "react";
import { createPlayer } from "../api";
const DEFAULT_IMAGE_URL =  "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png";
 
export default function CreatePlayerForm({ players, setPlayers }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [teamId, setTeamId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const [submitedData, setSubmitedData] = useState({});


  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitedData({ name, breed, status, imageUrl, teamId });

    // Set empty fields to default values
    const obj = { name, breed }
    obj["status"] = status ? status : "bench";
    obj["imageUrl"] = imageUrl ? imageUrl : DEFAULT_IMAGE_URL;
    obj["teamId"] = teamId ? teamId : null;

    // conditionally create new player (if name and breed Not empty)
    if (name !== "" && breed !== "") {
      const APIData = await createPlayer(obj);
      if (APIData.success) {
        // Resetting all players manually
        const newPlayersList = [...players, APIData.data.newPlayer];
        setPlayers(newPlayersList);

        // Clear input fields
        setName("");
        setBreed("");
        setImageUrl("");
        setTeamId("");
        setStatus("");
        setError(null);
        
      } else {
        setError(APIData.error.message);
      }

    }
    else{
      setError("All fields marked with an asterisk (*) are mandatory.");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>New Player</h3>
        {error && <p className="error">{error}</p>}
        <div className="fields">
          <label>Name*
            <input
              value={name}
              type="text"
              name="name"
              placeholder="--Name--"
              onChange={(e) => setName(e.target.value)}
            />
            {(submitedData.name === '') && <span className="required">Required field</span>}
          </label>

          <label>Breed*
            <input
              value={breed}
              type="text"
              name="breed"
              placeholder="--Breed--"
              onChange={(e) => setBreed(e.target.value)}
            />
            {(submitedData.breed === '') && <span className="required">Required field</span>}
          </label>

          <label>Team ID
            <input
              value={teamId}
              type="number"
              name="teamId"
              placeholder="--Team ID--"
              onChange={(e) => setTeamId(e.target.value)}
            />
          </label>
          <label>Image URL
            <input
              value={imageUrl}
              type="text"
              name="imageUrl"
              placeholder="--Image URL--"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>

          <label>Status
            <select name="status" id="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value=""></option>
              <option value="bench">Bench</option>
              <option value="field">Field</option>
            </select>
          </label>

        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

