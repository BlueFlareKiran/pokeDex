import React from "react";

export default function pokemonList({ pokemon, fetchDetails }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <div
          className="flex justify-between items-center border border-gray-200 p-4 mb-3 rounded-xl hover:shadow-md transition"
          key={poke.name}
        >
          <span className="capitalize">{poke.name}</span>
          <button
            onClick={() => fetchDetails(poke.url)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-lg text-sm font-medium"

          >
            Details
          </button>
        </div>
      ))}
    </div>
  );
}
