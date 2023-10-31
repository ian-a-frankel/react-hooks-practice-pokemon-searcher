import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [allPokemon, setAllPokemon] = useState([])
  const [searchText, setSearchText] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(pokemons => setAllPokemon(pokemons))
  },[setAllPokemon])

  const displayPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchText))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm searchText={searchText} setSearchText={setSearchText} setAllPokemon={setAllPokemon} allPokemon={allPokemon}/>
      <br />
      <Search setSearchText={setSearchText}/>
      <br />
      <PokemonCollection pokemons={displayPokemon}/>
    </Container>
  );
}

export default PokemonPage;
