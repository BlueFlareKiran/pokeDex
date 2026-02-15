/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import PokemonList from "../components/Pokemon/PokemonList";
import PokemonDetails from "../components/Pokemon/PokemonDetails";

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokeError, setPokeError] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [detailsloading, setDetailsLoading] = useState(false);
  const [fetchMore, setFetchMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const [view, setView] = useState("list");

  useEffect(() => {
    async function fetchPokemon() {
      try {
        if (offset === 0) {
          setLoading(true);
        } else {
          setFetchMore(true);
        }

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`,
        );
        const data = await res.json();
        const detailedPokemon = await Promise.all(
          data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            return await res.json();
          }),
        );

        setPokemon((prev) => [...prev, ...detailedPokemon]);
      } catch (err) {
        console.error(err);
        setError("Something went Wrong");
      } finally {
        if (offset === 0) {
          setLoading(false);
        } else {
          setFetchMore(false);
        }
      }
    }

    fetchPokemon();
  }, [offset]);

  async function fetchDetails(poke) {
    setPokemonDetails(poke);
    setView("details");
    console.log(pokemon);
  }

  return (
    <div className="flex-1 bg-gray-100 shadow-lg p-8 overflow-y-auto min-h-0">
      <div className="flex-1 bg-white shadow-lg p-8 overflow-y-auto min-h-0 border border-gray-100">
        <h2 className="text-xl font-bold">Current View: {view}</h2>
        {view === "list" && (
          <>
            <PokemonList pokemon={pokemon} fetchDetails={fetchDetails} />
            <button
              disabled={fetchMore}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
              onClick={() => setOffset((prev) => prev + 10)}
            >
              {fetchMore ? "Loading..." : "Load More"}
            </button>
          </>
        )}

        {view === "details" && (
          <>
            <button
              className="px-3 py-1 bg-purple-600  text-white rounded"
              onClick={() => setView("list")}
            >
              ← Back
            </button>
            <PokemonDetails pokemonDetails={pokemonDetails} />
          </>
        )}
      </div>
    </div>
  );
}
