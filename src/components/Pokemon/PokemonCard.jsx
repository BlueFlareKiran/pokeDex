import { SquarePlus } from "lucide-react";

export default function PokemonCard({ pokemon,onSelect }) {
  const imageUrl = pokemon?.sprites?.other?.["official-artwork"]?.front_default;

  return (
    <div onClick={() => onSelect(pokemon)} className="bg-white rounded shadow-md p-4 hover:shadow-lg transition cursor-pointer flex flex-col items-center">
      {imageUrl && <img className="border-3 p-2 rounded border-purple-400" src={imageUrl} alt={pokemon.name} />}
      <h2 className=" font-bold text-center capitalize">{pokemon.name}</h2>
      <div className="flex items-center justify-center gap-2 mt-2">
        {pokemon.types.map((typeObj) => (
          <span className="text-white bg-purple-500 capitalize font-semibold rounded py-0.5 px-2" key={typeObj.type.name}>{typeObj.type.name}</span>
        ))}
      </div>
    </div>
  );
}
