export default function PokemonProfileCard({ pokemonDetails, varieties }) {
  const imageUrl =
    pokemonDetails?.sprites?.other?.["official-artwork"]?.front_default;

  const Pokeid = String(pokemonDetails.id).padStart(3, "0");

  return (
    <div className="border p-4 rounded gap-2">
      {varieties &&
        varieties.map((v) => (
          <button
            className="bg-gray-200 rounded p-2 font-semibold m-2 capitalize"
            key={v.pokemon.name}
          >
            {v.pokemon.name.replace(/-/g, " ")}
          </button>
        ))}
        <p className="text-black font-semibold text-right">#{Pokeid}</p>
      {imageUrl && <img src={imageUrl} className="p-2" />}
      <h2 className="font-semibold text-center capitalize text-xl">
        {pokemonDetails.name}
      </h2>
      <div className="flex items-center justify-center gap-6 m-2 p-2">
        {pokemonDetails.types.map((type) => (
          <span className="text-white bg-purple-500 capitalize font-semibold rounded py-0.5 px-2" key={type.type.name}>{type.type.name}</span>
        ))}
      </div>
    </div>
  );
}
