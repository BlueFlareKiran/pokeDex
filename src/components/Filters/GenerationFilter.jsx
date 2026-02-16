import React from 'react'

export default function GenerationFilter({ 
  selectedGeneration, 
  setSelectedGeneration 
}) {
return (
  <div>
    <select
      value={selectedGeneration}
      onChange={(e) => setSelectedGeneration(e.target.value)}
    >
      <option value="">Select Generation</option>
    </select>
  </div>
)
}
