import React from "react";

export default function GenerationFilter({
  selectedGeneration,
  setSelectedGeneration,
}) {
  return (
    <div>
      <select
        value={selectedGeneration}
        onChange={(e) => setSelectedGeneration(e.target.value)}
        className="px-4 py-2 w-48 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
      >
        <option value="">All Generations</option>
        <option value="generation-i">Generation I</option>
        <option value="generation-ii">Generation II</option>
        <option value="generation-iii">Generation III</option>
        <option value="generation-iv">Generation IV</option>
        <option value="generation-v">Generation V</option>
        <option value="generation-vi">Generation VI</option>
        <option value="generation-vii">Generation VII</option>
        <option value="generation-viii">Generation VIII</option>
        <option value="generation-ix">Generation IX</option>
      </select>
    </div>
  );
}
