import React from 'react';
import { useParams } from 'react-router-dom';

const NumberOrString = () => {
  const {numberOrString} = useParams();
  return (
    <h2> The { isNaN(numberOrString) ? `word is: ${numberOrString}` : `number is: ${numberOrString}` }   </h2>
  )
}
export default NumberOrString
