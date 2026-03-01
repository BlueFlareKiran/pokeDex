// components/Pokemon/PokemonDetails/PokemonDetails.jsx

import PokemonProfileCard from "./PokemonProfileCard";
import PokemonStats from "./PokemonStats";
import PokemonEvolutionLine from "./PokemonEvolutionLine";
import PokemonMovesList from "./PokemonMovesList";
import PokemonTypeDefenses from "./PokemonTypeDefenses";
import PokemonForms from "./PokemonForms";

export default function PokemonDetails({ pokemonDetails }) {

  if (!pokemonDetails) {
    return <div>Select a Pokemon</div>;
  }

  return (
    <div className="flex flex-col gap-6 p-6 border border-gray-700 rounded">

      {/* Profile Section */}
      <PokemonProfileCard pokemonDetails={pokemonDetails} />

      {/* Stats Section */}
      <PokemonStats pokemonDetails={pokemonDetails} />

      {/* Evolution Section */}
      <PokemonEvolutionLine pokemonDetails={pokemonDetails} />

      {/* Type Defenses */}
      <PokemonTypeDefenses pokemonDetails={pokemonDetails} />

      {/* Forms */}
      <PokemonForms pokemonDetails={pokemonDetails} /> 

      {/* Moves */}
      <PokemonMovesList pokemonDetails={pokemonDetails} />

    </div>
  );
}