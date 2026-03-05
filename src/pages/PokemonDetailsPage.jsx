import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonDetails from "../components/Pokemon/PokemonDetails/PokemonDetails";
import PokemonFilterBar from "../components/Pokemon/PokemonFilterBar";

export default function PokemonDetailsPage() {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [varieties, setVarieties] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setLoading(true);

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();

        const speciesRes = await fetch(data.species.url);
        const speciesData = await speciesRes.json();

        setVarieties(speciesData.varieties);

        setPokemonData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [name]);

  if (loading) {
    return (
      <div className="flex-1 bg-white flex items-center justify-center min-h-0 shadow-md">
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#f4f7fb] shadow-lg p-8 overflow-y-auto min-h-0">
      <div className="bg-white shadow-lg p-8 border border-gray-100">
        {/* {varieties.length > 1 && (
          <div>
            {varieties.map((v) => (
              <p key={v.pokemon.name}>{v.pokemon.name}</p>
            ))}
          </div>
        )} */}
        <PokemonDetails pokemonDetails={pokemonData} varieties={varieties} />
      </div>
    </div>
  );
}
