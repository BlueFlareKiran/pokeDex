import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemon, fetchDetails }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pokemon.map((poke) => (
        <PokemonCard key={poke.id} pokemon={poke} onSelect={fetchDetails} />
      ))}
    </div>
  );
}
