import PokemonProfileCard from "./PokemonProfileCard";
import PokemonStats from "./PokemonStats";
import PokemonEvolutionLine from "./PokemonEvolutionLine";
import PokemonMovesList from "./PokemonMovesList";
import PokemonTypeDefenses from "./PokemonTypeDefenses";
import PokemonAbilities from "./PokemonAbilities";

export default function PokemonDetails({
  pokemonDetails,
  varieties,
  abilities,
}) {
  if (!pokemonDetails) {
    return <div>Select a Pokemon</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      {/* LEFT COLUMN: Image + types + abilities */}
      <div className="flex gap-10 items-center">
        <div className="flex w-100">
          <PokemonProfileCard
            pokemonDetails={pokemonDetails}
            varieties={varieties}
          />
        </div>
        <div className="flex-1 max-w-md">
          <PokemonAbilities
            pokemonDetails={pokemonDetails}
            abilities={abilities}
            varieties={varieties}
          />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-[53%]">
          <PokemonStats pokemonDetails={pokemonDetails} />
        </div>
        <div className="w-[47%]">
          <PokemonTypeDefenses pokemonDetails={pokemonDetails} />
        </div>
      </div>

      {/* ROW 3: Evolution Line full width */}
      <PokemonEvolutionLine pokemonDetails={pokemonDetails} />

      {/* ROW 4: Moves side by side */}
      <PokemonMovesList pokemonDetails={pokemonDetails} />
    </div>
  );
}
