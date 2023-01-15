import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'
//funcion para validar si un color es valido
//ref: https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
const isValidColor = (strColor) =>{
    var newStyle = new Option().style;
    newStyle.color = strColor;
    return newStyle.color !== '';
}
const ColorString = () => {
  let {string, colorString, colorBackground} = useParams();
  const style = {
    color: (isValidColor(colorString) ? colorString : 'white'),  //default values si es invalido el color seleccionado
    background: (isValidColor(colorBackground) ? colorBackground : 'black')
  };
  const errorStringColorNotice = isValidColor(colorString) ? null : <h4 className='notice' >You have entered an invalid string color name</h4>;
  const errorBackgroundColorNotice = isValidColor(colorBackground) ? null : <h4 className='notice' >You have entered an invalid background color name</h4>;
  return (
    <div>
        {errorStringColorNotice}
        {errorBackgroundColorNotice}
        <h2 style={style}>{string}</h2>
    </div>

  )
}
export default ColorString