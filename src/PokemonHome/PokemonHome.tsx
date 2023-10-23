import React, { useEffect, useState } from 'react';
import logo from '../Resources/Pokemon-Logo.png';
import { Pokemon, PokemonCard } from 'PokemonHome/PokemonCard';
import Loader from 'Loader/Loader';
import useFetchPokemons from './useFetchPokemons';



const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';



function PokemonHome() {
  const {pokemons, loading} = useFetchPokemons(baseUrl);

  if (!pokemons) return <div>No se encontraron pokemones</div>;

  // Spike header in Router
  return (
    <>
      <img className='logo' src={logo} alt='Logo'/> 
      {loading ? <Loader/> : <ol className='grid'>
            {pokemons.map((pokemon: Pokemon) => (
              <PokemonCard key={pokemon.id} {...pokemon} />
            ))}
          </ol>
      } 
    </>
  );
}

export default PokemonHome;
