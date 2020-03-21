import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [dataIsFiltered, dataIsUpdated] = useState([])

  const searching = allcharacters => {
    dataIsUpdated(allcharacters)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setCharacters(response.data.results);
      dataIsUpdated(response.data.results);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
