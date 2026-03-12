import { useNavigate } from "react-router-dom";

export default function PokemonProfileCard({ pokemonDetails, varieties }) {
  const imageUrl = pokemonDetails?.sprites?.other?.["official-artwork"]?.front_default;
  const Pokeid = String(pokemonDetails.id).padStart(3, "0");
  const navigate = useNavigate();

  const typeColors = {
    fire: "bg-orange-500", water: "bg-blue-500", grass: "bg-green-500",
    electric: "bg-yellow-400", psychic: "bg-pink-500", ice: "bg-cyan-400",
    dragon: "bg-indigo-600", dark: "bg-gray-800", fairy: "bg-pink-300",
    fighting: "bg-red-600", poison: "bg-purple-600", ground: "bg-yellow-600",
    rock: "bg-yellow-700", bug: "bg-lime-500", ghost: "bg-purple-800",
    steel: "bg-gray-400", flying: "bg-sky-400", normal: "bg-gray-400",
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 w-96 shrink-0">
      
      {/* Form buttons */}
      {varieties && varieties.length > 1 && (
        <div className="flex flex-wrap gap-2 p-3 bg-gray-50 border-b border-gray-100">
          {varieties.map((v) => (
            <button
              key={v.pokemon.name}
              onClick={() => navigate(`/pokemon/${v.pokemon.name}`)}
              className={`text-xs px-3 py-1 rounded-full font-medium capitalize transition
                ${pokemonDetails.name === v.pokemon.name
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-purple-400"
                }`}
            >
              {v.pokemon.name.replace(/-/g, " ")}
            </button>
          ))}
        </div>
      )}

      {/* Image area */}
      <div className="bg-gradient from-gray-50 to-white flex items-center justify-center p-4 relative">
        <span className="absolute top-3 right-4 text-xs text-gray-300 font-mono font-bold">
          #{Pokeid}
        </span>
        {imageUrl && (
          <img src={imageUrl} alt={pokemonDetails.name} className="w-64 h-64 object-contain drop-shadow-md" />
        )}
      </div>

      {/* Name + types */}
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold capitalize mb-3">
          {pokemonDetails.name.replace(/-/g, " ")}
        </h2>
        <div className="flex justify-center gap-2">
          {pokemonDetails.types.map((t) => (
            <span
              key={t.type.name}
              className={`${typeColors[t.type.name] || "bg-gray-400"} text-white capitalize text-xs font-semibold px-3 py-1 rounded`}
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}