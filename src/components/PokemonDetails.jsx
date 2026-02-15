import React from "react";

export default function PokemonDetails({pokemonDetails}) {
  return (
    <div className="mt-6 p-4 border rounded">
      <h2 className="text-xl font-semibold capitalize">
        {pokemonDetails.name}
      </h2>
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
    </div>
  );
}
