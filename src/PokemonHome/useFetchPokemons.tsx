
import axios from "axios";
import { Pokemon } from "./PokemonCard";
import { useEffect, useState } from "react";

const useFetchPokemons = (url: string) => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);


    const getData = async (url: string) => {
        const response = await axios.get(url);
        return {
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other['official-artwork'].front_default,
          types: response.data.types.map((type: { type: { name: string; }; }) => type.type.name),
        };
      }

    useEffect(() => {
        const getPokemons = async () => {
            const urls = await axios.get(url).then((response) => response.data.results.map((pokemon: {name: string, url: string}) => pokemon.url));
            const pokemons = urls.map(getData);
            Promise.all(pokemons).then((pokemons) => setPokemons(pokemons));
        }
        getPokemons();
    })

    return [pokemons]
}

export default useFetchPokemons;