// /* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import PokemonList from "../components/Pokemon/PokemonList";
import SearchBar from "../components/Filters/SearchBar";
import GenerationFilter from "../components/Filters/GenerationFilter";
import TypeFilter from "../components/Filters/TypeFilter";
import { useRef } from "react";
import PokemonDetails from "../components/Pokemon/PokemonDetails/PokemonDetails";
import { useNavigate } from "react-router-dom";
import PokemonFilterBar from "../components/Pokemon/PokemonFilterBar";

export default function PokemonPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGeneration, setSelectedGeneration] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [fullList, setFullList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [selectedType, setSelectedType] = useState("");
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  let filteredList = fullList;
  const navigate = useNavigate();

  function handleSuggestionClick(poke) {
    navigate(`/pokemon/${poke.name}`);
    setSearchTerm("");
    setSuggestions([]);
  }

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

  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && visibleCount < filteredList.length) {
          setIsFetchingMore(true);

          setTimeout(() => {
            setVisibleCount((prev) => prev + 20);
            setIsFetchingMore(false);
          }, 500);
        }
      },
      { threshold: 1 },
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [visibleCount, filteredList.length]);

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

  console.log(fullList);

  if (loading)
    return (
      <div className="flex-1 bg-white flex items-center justify-center min-h-0 shadow-md">
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="flex-1 bg-[#f4f7fB] shadow-lg p-8 overflow-y-auto min-h-0">
      <div className="flex-1 bg-white shadow-lg p-8 overflow-y-auto min-h-0 border border-gray-100">
        <PokemonFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedGeneration={selectedGeneration}
          setSelectedGeneration={setSelectedGeneration}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
        />

        <PokemonList pokemon={visiblePokemon} />
        <div ref={loadMoreRef} className="flex justify-center py-6">
          {isFetchingMore && (
            <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
      </div>
    </div>
  );
}
