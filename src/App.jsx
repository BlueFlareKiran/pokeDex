import { useState } from "react";
import { useEffect } from "react";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
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
        setPokemon((prev) => [...prev, ...data.results]);
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

  async function fetchDetails(url) {
    try {
      setPokemonDetails(null);
      setPokeError(null);
      setDetailsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setPokemonDetails(data);
    } catch (err) {
      console.error(err);
      setPokeError("Something went wrong");
    } finally {
      setDetailsLoading(false);
      setView("details");
    }
  }
  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      {/* HEADER */}
      <div className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-8 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Pokemon Dashboard</h1>
      </div>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden min-h-0">
        <Sidebar />
        <MainContent
          view={view}
          setView={setView}
          pokemon={pokemon}
          fetchDetails={fetchDetails}
          pokemonDetails={pokemonDetails}
          fetchMore={fetchMore}
          setOffset={setOffset}
        />
      </div>

      <div className="bg-black text-white rounded px-4 py-2">Footer</div>
    </div>
  );
}

export default App;
