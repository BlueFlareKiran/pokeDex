export default function PokemonTypeDefenses({ pokemonDetails }) {
  const typeChart = {
    normal: { rock: 0.5, ghost: 0, steel: 0.5 },
    fire: {
      fire: 0.5,
      water: 2,
      grass: 0.5,
      ice: 0.5,
      bug: 0.5,
      rock: 2,
      dragon: 0.5,
      steel: 0.5,
    },
    water: {
      fire: 0.5,
      water: 0.5,
      grass: 2,
      electric: 2,
      ice: 0.5,
      steel: 0.5,
    },
    electric: {
      water: 0.5,
      electric: 0.5,
      grass: 1,
      ground: 2,
      flying: 0.5,
      dragon: 1,
    },
    grass: {
      fire: 2,
      water: 0.5,
      grass: 0.5,
      poison: 2,
      ground: 0.5,
      flying: 2,
      bug: 2,
      rock: 0.5,
      dragon: 1,
      steel: 1,
    },
    ice: {
      fire: 2,
      water: 1,
      grass: 0.5,
      ice: 0.5,
      fighting: 2,
      rock: 2,
      steel: 2,
    },
    fighting: {
      normal: 0.5,
      ice: 0.5,
      poison: 1,
      rock: 0.5,
      bug: 0.5,
      ghost: 0,
      steel: 0.5,
      psychic: 2,
      flying: 2,
      fairy: 2,
    },
    poison: {
      grass: 0.5,
      poison: 0.5,
      ground: 2,
      rock: 1,
      ghost: 1,
      steel: 0,
      psychic: 2,
      fairy: 0.5,
    },
    ground: {
      fire: 0.5,
      electric: 0,
      grass: 2,
      poison: 0.5,
      rock: 0.5,
      steel: 0.5,
      water: 2,
      ice: 2,
    },
    flying: {
      electric: 2,
      grass: 0.5,
      fighting: 0.5,
      bug: 0.5,
      rock: 2,
      ice: 2,
      ground: 0,
    },
    psychic: {
      fighting: 0.5,
      psychic: 0.5,
      dark: 2,
      bug: 2,
      ghost: 2,
      steel: 1,
    },
    bug: {
      fire: 2,
      grass: 0.5,
      fighting: 0.5,
      ground: 0.5,
      rock: 2,
      flying: 2,
      steel: 1,
    },
    rock: {
      normal: 0.5,
      fire: 0.5,
      water: 2,
      grass: 2,
      fighting: 2,
      poison: 0.5,
      ground: 2,
      flying: 0.5,
      steel: 2,
    },
    ghost: { normal: 0, fighting: 0, poison: 0.5, bug: 0.5, ghost: 2, dark: 2 },
    dragon: {
      fire: 0.5,
      water: 0.5,
      grass: 0.5,
      electric: 0.5,
      ice: 2,
      dragon: 2,
      fairy: 2,
    },
    dark: { fighting: 2, psychic: 0, bug: 2, ghost: 0.5, dark: 0.5, fairy: 2 },
    steel: {
      normal: 0.5,
      fire: 2,
      grass: 0.5,
      ice: 0.5,
      fighting: 2,
      poison: 0,
      ground: 2,
      flying: 0.5,
      psychic: 0.5,
      bug: 0.5,
      rock: 0.5,
      dragon: 0.5,
      steel: 0.5,
      fairy: 0.5,
    },
    fairy: {
      fighting: 0.5,
      poison: 2,
      bug: 0.5,
      dragon: 0,
      dark: 0.5,
      steel: 2,
    },
  };

  const typeColors = {
    fire: "bg-orange-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400",
    psychic: "bg-pink-500",
    ice: "bg-cyan-400",
    dragon: "bg-indigo-600",
    dark: "bg-gray-800",
    fairy: "bg-pink-300",
    fighting: "bg-red-600",
    poison: "bg-purple-600",
    ground: "bg-yellow-600",
    rock: "bg-yellow-700",
    bug: "bg-lime-500",
    ghost: "bg-purple-800",
    steel: "bg-gray-400",
    flying: "bg-sky-400",
    normal: "bg-gray-400",
  };

  const allTypes = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];

  const pokemonTypes = pokemonDetails.types.map((t) => t.type.name);

  const defenses = allTypes.map((attackingType) => {
    let multiplier = 1;

    pokemonTypes.forEach((defendingType) => {
      const effectiveness = typeChart[attackingType]?.[defendingType];
      if (effectiveness !== undefined) {
        multiplier *= effectiveness;
      }
    });

    return { type: attackingType, multiplier };
  });

  return (
    <div className="p-6 rounded-2xl shadow-sm border border-gray-100">
      <div>
        <h1 className="font-bold text-gray-700 text-lg mb-4">Type Defenses</h1>

        <div className="grid grid-cols-7 gap-3">
          {defenses.map((d) => (
            <div key={d.type} className="flex flex-col items-center gap-1">
              {/* badge */}
              <span
               className={`${typeColors[d.type]} text-white text-xs font-bold px-2 py-1.5 rounded-md w-full text-center uppercase tracking-wide`}
              >
                {d.type.slice(0, 3)}{" "}
                {/* first 3 letters: "nor", "fir", "wat" */}
              </span>
              {/* multiplier - only show if not 1 */}
              <span className="text-xs font-bold text-gray-700">
                {d.multiplier !== 1 ? d.multiplier : ""}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
