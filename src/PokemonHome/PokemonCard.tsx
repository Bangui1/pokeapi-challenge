import { useNavigate } from "react-router-dom";



export interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: string[];
  }
  


export function PokemonCard (pokemon: Pokemon) {
    const nav = useNavigate()

    return (
        <div className= 'poke-item' onClick={() => nav(`/${pokemon.id}`)}>
            <img className='image' src={pokemon.image} alt={pokemon.name} />
            <div className='pokemon-data'>
                {`#${pokemon.id} ${pokemon.name}`}
            <div className='types'>
                {pokemon.types.map((type: string) => (
            <div className={`type ${type}`}>{type}</div>
                ))}
                </div>
                </div> 
        </div>
    )
}