import React from "react";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";

export default function MainContent({
  view,
  setView,
  pokemon,
  fetchDetails,
  pokemonDetails,
  fetchMore,
  setOffset
}) {
  return (
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
  );
}
