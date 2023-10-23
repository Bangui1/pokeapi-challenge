import { PokemonData, statistic } from "./PokemonProfile";


function ProfileData({ pokemon }: { pokemon: PokemonData | undefined }) {
    return (
        <div className='profile-card'>
            <img className='profile-image' src={pokemon?.image} alt={pokemon?.name} />
            <div className='profile-info'>
                <div className='profile-name'>#{pokemon?.id} {pokemon?.name}</div>
                <div className='profile-types'>
                    {pokemon?.types.map((type: string) => (
                        <div className={`type profile-type ${type}`}>{type}</div>
                    ))}
                </div>
                <div className='profile-types'>
                    <div className='measurement'>Height: {pokemon?.height} m</div>
                    <div className='measurement'>Weight: {pokemon?.weight} kg</div>
                    <div className='measurement'>Abilities:
                        {pokemon?.abilities.map((ability: string) => (
                            <div className='ability'>{ability}</div>
                        ))}
                    </div>
                </div>
                {pokemon?.stats.map((stat: statistic) => (
                    <>
                        <div className="stat-name">{stat.name}</div>
                        <div className='bar'>
                            <div className='bar-fill' style={{ width: `${(stat.value / 255) * 100}%` }}></div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}



export default ProfileData;