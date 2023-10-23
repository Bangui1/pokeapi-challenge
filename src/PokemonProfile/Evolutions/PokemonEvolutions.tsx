import { useEffect } from "react";
import useFetchEvolutions from "./useFetchEvolutions";
import { useNavigate } from "react-router-dom";

export interface Evolution {
  id: number;
  name: string;
  image: string;
}

function PokemonEvolutions({ id }: { id: number | undefined }) {
  const [evolutions] = useFetchEvolutions(id);

  const nav = useNavigate();

  return (
    <div className="evolution-container">
      {evolutions.map((evolution, index) => (
        <div key={index} className="evolution-set">
          {evolution.map((pokemon: Evolution) => (
            <div key={pokemon.id} className="evolution">
              <div
                className="evolution-info"
                onClick={() => nav(`/${pokemon.id}`)}
              >
                <img
                  className="evolution-image"
                  src={pokemon.image}
                  alt={pokemon.name}
                />
                <div className="evolution-name">
                  #{pokemon.id} {pokemon.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PokemonEvolutions;
