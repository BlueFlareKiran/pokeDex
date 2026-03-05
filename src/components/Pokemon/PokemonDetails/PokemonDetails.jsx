import PokemonProfileCard from "./PokemonProfileCard";
import PokemonStats from "./PokemonStats";
import PokemonEvolutionLine from "./PokemonEvolutionLine";
import PokemonMovesList from "./PokemonMovesList";
import PokemonTypeDefenses from "./PokemonTypeDefenses";
import PokemonForms from "./PokemonForms";
import PokemonAbilities from "./PokemonAbilities";

export default function PokemonDetails({ pokemonDetails, varieties }) {
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
      <div className="flex-1">
        <PokemonAbilities pokemonDetails={pokemonDetails} varieties={varieties} />
      </div>
      </div>

      <div className="flex items-center gap-9">
        {/* RIGHT COLUMN: Stats */}
        <div className="flex-1">
          <PokemonStats pokemonDetails={pokemonDetails} />
        </div>

        {/* ROW 2: Type Defenses full width */}
        <div className="flex-1">
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
