import { useState, useEffect } from "react";
import { Evolution } from "./PokemonEvolutions";
import axios from "axios";

export interface EvolutionChain {
  species: {
    name: string;
    url: string;
  };
  evolves_to: EvolutionChain[];
}

const useFetchEvolutions = (pokemonId: number | undefined) => {
  const [evolutions, setEvolutions] = useState<Evolution[][]>([]);

  const getEvolutionChain = async (pokemonId: number) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
    );
    return response.data.evolution_chain.url;
  };

  const processEvolutionChain = async (evolutionChain: EvolutionChain[]) => {
    const currentEvolutions: Evolution[] = [];

    evolutionChain.forEach(async (evolution: EvolutionChain) => {
      const pokemon = await fetchPokemonData(evolution);
      currentEvolutions.push(pokemon);
    });

    setEvolutions((prevEvolutions) => [...prevEvolutions, currentEvolutions]);
  };

  const fetchPokemonData = async (pokmeon: EvolutionChain) => {
    const pokemonId = Number.parseInt(pokmeon.species.url.split("/")[6]);
    return {
      id: pokemonId,
      name: pokmeon.species.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
    };
  };

  const getEvolutions = async (url: string) => {
    const response = await axios.get(url);
    const chain = response.data.chain;

    await processEvolutionChain([chain]);

    let currentChain: EvolutionChain[] = chain.evolves_to;
    while (currentChain.length > 0) {
      await processEvolutionChain(currentChain);
      currentChain = currentChain[0].evolves_to;
    }
  };

  useEffect(() => {
    if (pokemonId) {
      getEvolutionChain(pokemonId).then((url) => getEvolutions(url));
    }
  }, []);

  return [evolutions];
};

export default useFetchEvolutions;
