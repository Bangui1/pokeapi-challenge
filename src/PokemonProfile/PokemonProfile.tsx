import { Pokemon } from "PokemonHome/PokemonCard";
import logo from '../Resources/Pokemon-Logo.png';
import {useNavigate, useParams} from 'react-router-dom'
import useFetchProfile from "./useFetchProfile";
import { useState, useEffect } from "react";
import Loader from "Loader/Loader";

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
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (pokemon) setLoading(false)
    }, [pokemon])





    return (
        <>
            <div className='background'>
                <img className='logo' src={logo} alt='Logo' onClick={() => nav('/')}/>
                {loading ? <Loader/> :
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
                            {pokemon?.stats.map((stat: statistic) => (
                                <>
                                <div className="stat-name">{stat.name}</div>
                                <div className='bar'>
                                    <div className='bar-fill' style={{width: `${(stat.value / 255) *100}%`}}></div>
                                    </div>
                                </>
                                ))}
                            </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default PokemonProfile;