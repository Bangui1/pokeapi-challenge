import { Pokemon } from "PokemonHome/PokemonCard";
import { useNavigate, useParams } from "react-router-dom";
import useFetchProfile from "./useFetchProfile";
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
  const { id } = useParams();
  const { pokemon, loading } = useFetchProfile(id);
  useNavigate();
  return (
    <>
      <div className="background">
        {loading ? (
          <Loader />
        ) : (
          <div className="profile-body">
            <ProfileData pokemon={pokemon} />
            <PokemonEvolutions id={pokemon?.id} />
          </div>
        )}
      </div>
    </>
  );
}

export default PokemonProfile;
