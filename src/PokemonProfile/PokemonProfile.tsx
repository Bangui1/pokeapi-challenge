import { Pokemon } from "PokemonHome/PokemonCard";
import logo from '../Resources/Pokemon-Logo.png';
import {useNavigate, useParams} from 'react-router-dom'
import useFetchProfile from "./useFetchProfile";

export interface PokemonData extends Pokemon {
    height: number;
    weight: number;
    abilities: string[];
    stats: statistic[];
}

interface statistic {
    name: string;
    value: number;
}

function PokemonProfile() {

    const {id} = useParams()
    const [pokemon] = useFetchProfile(id)
    const nav = useNavigate()


    return (
        <>
            <div className='background'>
                <img className='logo' src={logo} alt='Logo' onClick={() => nav('/')}/>
                <div className='profile-body'>
                    <div className='profile-card'>
                        <img className='profile-image' src={pokemon?.image} alt={pokemon?.name}/>
                        <div className='profile-info'>
                            <div className='profile-name'>#{pokemon?.id} {pokemon?.name}</div>
                            <div className='profile-types'>
                                {pokemon?.types.map((type: string) => (
                                    <div className={`type profile-type ${type}`}>{type}</div>
                                ))}
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonProfile;