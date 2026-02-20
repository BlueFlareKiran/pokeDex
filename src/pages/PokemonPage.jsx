// /* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import PokemonList from "../components/Pokemon/PokemonList";
import PokemonDetails from "../components/Pokemon/PokemonDetails";
import SearchBar from "../components/Filters/SearchBar";
import GenerationFilter from "../components/Filters/GenerationFilter";
import TypeFilter from "../components/Filters/TypeFilter";

export default function PokemonPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [view, setView] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGeneration, setSelectedGeneration] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [fullList, setFullList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [selectedType, setSelectedType] = useState("");

  let filteredList = fullList;

  if (selectedGeneration !== "") {
    filteredList = filteredList.filter((poke) => {
      return poke.generation === selectedGeneration;
    });
  }

  if (selectedType !== "") {
    filteredList = filteredList.filter((poke) => {
      return poke.types.some((t) => t.type.name === selectedType);
    });
  }

  const visiblePokemon = filteredList.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(20);
  }, [selectedGeneration]);

  useEffect(() => {
    setVisibleCount(20);
  }, [selectedType]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setLoading(true);

        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
        const data = await res.json();

        const detailedPokemon = await Promise.all(
          data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            const pokemonData = await res.json();

            const speciesRes = await fetch(pokemonData.species.url);
            const speciesData = await speciesRes.json();

            return {
              ...pokemonData,
              generation: speciesData.generation.name,
            };
          }),
        );

        setFullList(detailedPokemon);
      } catch (err) {
        console.error(err);
        setError("Something went Wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = fullList.filter((poke) =>
      poke.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setSuggestions(filtered.slice(0, 5));
  }, [searchTerm, fullList]);

  function fetchDetails(poke) {
    setPokemonDetails(poke);
    setView("details");
  }

  function handleSuggestionClick(poke) {
    setPokemonDetails(poke);
    setView("details");
    setSearchTerm("");
    setSuggestions([]);
  }

  console.log(fullList);

if (loading)
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  
  return (
    <div className="flex-1 bg-gray-100 shadow-lg p-8 overflow-y-auto min-h-0">
      <div className="flex-1 bg-white shadow-lg p-8 overflow-y-auto min-h-0 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4 relative">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border rounded shadow z-10">
                {suggestions.map((poke) => (
                  <div
                    key={poke.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer capitalize"
                    onClick={() => handleSuggestionClick(poke)}
                  >
                    {poke.name}
                  </div>
                ))}
              </div>
            )}

            <GenerationFilter
              selectedGeneration={selectedGeneration}
              setSelectedGeneration={setSelectedGeneration}
            />
            <TypeFilter selectedType={selectedType} setSelectedType={setSelectedType} />
          </div>
        </div>

        {view === "list" && (
          <>
            <PokemonList pokemon={visiblePokemon} fetchDetails={fetchDetails} />

            <button
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
              onClick={() => setVisibleCount((prev) => prev + 20)}
            >
              Load More
            </button>
          </>
        )}

        {view === "details" && (
          <>
            <button
              className="px-3 py-1 bg-purple-600 text-white rounded"
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
