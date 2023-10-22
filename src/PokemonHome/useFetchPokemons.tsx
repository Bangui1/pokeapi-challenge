
import axios from "axios";
import { Pokemon } from "./PokemonCard";
import { useEffect, useState } from "react";

const useFetchPokemons = (url: string) => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const [nextUrl, setNextUrl] = useState(url);

    const [isLoading, setIsLoading] = useState(false);


    const getData = async (url: string) => {
        const response = await axios.get(url);
        return {
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other['official-artwork'].front_default,
          types: response.data.types.map((type: { type: { name: string; }; }) => type.type.name),
        };
      }

      
      const getPokemons = async () => {
        setIsLoading(true)

        try{
        const response = await axios.get(nextUrl)
        const urls = response.data.results.map((result: { url: string; }) => result.url);
        const next = response.data.next; 
        const pokemons = urls.map(getData);
        const newPokemons = await Promise.all(pokemons)

        setPokemons((prevItems) => [...prevItems, ...newPokemons]);
        setNextUrl(next);
        } catch (error) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      }
      
      const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoading) {
          getPokemons();
        }
      };
      
      useEffect(() => {
        getPokemons();
      },[])

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[isLoading])


    return [pokemons]
}

export default useFetchPokemons;