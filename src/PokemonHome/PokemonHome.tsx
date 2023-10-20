import React, { useEffect, useState } from 'react';
import logo from '../Resources/Pokemon-Logo.png';
import { Pokemon, PokemonCard } from 'PokemonHome/PokemonCard';
import Loader from 'Loader/Loader';
import useFetchPokemons from './useFetchPokemons';



const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';



function PokemonHome() {
  const [pokemons] = useFetchPokemons(baseUrl); 
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (pokemons.length > 0) setLoading(false)
  }, [pokemons])

  if (!pokemons) return null;



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
