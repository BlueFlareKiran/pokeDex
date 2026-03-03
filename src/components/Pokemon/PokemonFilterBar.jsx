import React from "react";
import SearchBar from "../Filters/SearchBar";
import GenerationFilter from "../Filters/GenerationFilter";
import TypeFilter from "../Filters/TypeFilter";

function PokemonFilterBar({
  searchTerm,
  setSearchTerm,
  selectedGeneration,
  setSelectedGeneration,
  selectedType,
  setSelectedType,
  suggestions,
  handleSuggestionClick,
}) {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        {/* LEFT SIDE */}
        <div className="relative">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-md z-10">
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
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-3">
          <GenerationFilter
            selectedGeneration={selectedGeneration}
            setSelectedGeneration={setSelectedGeneration}
          />
          <TypeFilter
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </div>
      </div>
    </>
  );
}

export default PokemonFilterBar;
