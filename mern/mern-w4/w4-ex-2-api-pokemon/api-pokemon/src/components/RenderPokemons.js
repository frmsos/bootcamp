import React from 'react'

function RenderPokemons(props) {
    const pokemonVector = props;
    console.log("render",pokemonVector);
  return (
    <div>RenderPokemons
        <ul>
            {
                pokemonVector.results.map( (item, index) => {
                    return <li key={index}> {item.name}  </li> ;
                } )

            }


        </ul>
    </div>

  )
}

export default RenderPokemons