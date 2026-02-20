export default function TypeFilter({
  selectedType,
  setSelectedType,
}) {
  return (
    <div>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="px-4 py-2 w-48 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
      >
        <option value="">All Types</option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="fairy">Fairy</option>
      </select>
    </div>
  );
}