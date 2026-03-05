export default function PokemonStats({ pokemonDetails }) {
  const stats = pokemonDetails.stats;
  // stats looks like this from PokeAPI:
  // [{base_stat: 78, stat: {name: "hp"}}, {base_stat: 84, stat: {name: "attack"}}, ...]

  // max stat value in the game is 255 (used to calculate bar width %)
  const MAX_STAT = 255;

  // color the bar based on the stat value
  function getStatColor(value) {
    if (value < 50) return "bg-red-400";
    if (value < 80) return "bg-yellow-400";
    if (value < 100) return "bg-green-400";
    return "bg-blue-400";
  }

  // make the stat names more readable
  function formatStatName(name) {
    const names = {
      "hp": "HP",
      "attack": "Attack",
      "defense": "Defense",
      "special-attack": "Sp. Atk",
      "special-defense": "Sp. Def",
      "speed": "Speed",
    };
    return names[name] || name;
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold text-gray-700 mb-2">Base Stats</h2>

      {stats.map((s) => (
        <div key={s.stat.name} className="flex items-center gap-3">

          {/* Stat name - fixed width so bars all line up */}
          <span className="text-sm text-gray-500 w-20 shrink-0">
            {formatStatName(s.stat.name)}
          </span>

          {/* Stat number - fixed width so bars all line up */}
          <span className="text-sm font-bold w-8 text-right shrink-0">
            {s.base_stat}
          </span>

          {/* Bar background */}
          <div className="flex-1 bg-gray-100 rounded-full h-2">
            {/* Bar fill - width is a percentage of MAX_STAT */}
            <div
              className={`h-2 rounded-full ${getStatColor(s.base_stat)}`}
              style={{ width: `${(s.base_stat / MAX_STAT) * 100}%` }}
            />
          </div>

        </div>
      ))}

    </div>
  );
}