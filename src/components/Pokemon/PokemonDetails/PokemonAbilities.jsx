import React from 'react'

function PokemonAbilities({pokemonDetails, varieties}) {
  return (
        <div className=''>
            {pokemonDetails.abilities.map((a) => (
                <span>{a.ability.name}</span>
            ))}
        </div>
  )
}

export default PokemonAbilities