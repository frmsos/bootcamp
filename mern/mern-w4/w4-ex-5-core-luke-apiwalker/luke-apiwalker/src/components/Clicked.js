import React from 'react'

const Clicked = (props) => {
  return (
    <div>
        <h1>Clicked</h1>
        <h2> {props.idValue} </h2>
        {console.log(props)}


    </div>

  )
}

export default Clicked