import { Pokemon } from "PokemonHome/PokemonCard";
import logo from '../Resources/Pokemon-Logo.png';
import {useNavigate, useParams} from 'react-router-dom'
import useFetchProfile from "./useFetchProfile";
import { useState, useEffect } from "react";
import Loader from "Loader/Loader";
import PokemonEvolutions from "./Evolutions/PokemonEvolutions";
import ProfileData from "./ProfileData";

export interface PokemonData extends Pokemon {
    height: number;
    weight: number;
    abilities: string[];
    stats: statistic[];
}

export interface statistic {
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
                    <ProfileData pokemon={pokemon} />
                    <PokemonEvolutions id={pokemon?.id} />
                </div>
                }
            </div>
        </>
    )
}

export default PokemonProfile;