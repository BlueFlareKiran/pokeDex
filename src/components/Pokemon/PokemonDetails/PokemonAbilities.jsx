export default function PokemonAbilities({ abilities }) {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h2 className="text-lg font-bold text-gray-700">Abilities</h2>
      {abilities.map((a) => (
        <div key={a.name} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-1">
            <span className="capitalize font-semibold text-gray-800">{a.name.replace(/-/g, " ")}</span>
            {a.is_hidden && (
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-medium">
                Hidden
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">{a.description}</p>
        </div>
      ))}
    </div>
  );
}