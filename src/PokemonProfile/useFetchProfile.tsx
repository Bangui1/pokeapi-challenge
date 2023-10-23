import axios from "axios"
import { useEffect, useState } from "react"
import { PokemonData } from "./PokemonProfile"


const useFetchProfile = (id: string | undefined) => {

    const [pokemon, setPokemon] = useState<PokemonData>()
// to fun
    useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
        const pokemonData = response.data
        const pokemon = {
            id: pokemonData.id,
            name: pokemonData.name,
            image: pokemonData.sprites.other['official-artwork'].front_default,
            types: pokemonData.types.map((type: { type: { name: string; }; }) => type.type.name),
            height: pokemonData.height/10,
            weight: pokemonData.weight/10,
            abilities: pokemonData.abilities.map((ability: { ability: { name: string; }; }) => ability.ability.name),
            stats: pokemonData.stats.map((statistic: { stat: { name: string; }; base_stat: number; }) => ({
                name: statistic.stat.name,
                value: statistic.base_stat,
            })),
        }
        setPokemon(pokemon)
    })
    }, [id])

    return [pokemon]
}

export default useFetchProfile;