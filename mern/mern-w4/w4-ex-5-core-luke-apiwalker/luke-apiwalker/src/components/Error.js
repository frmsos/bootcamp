import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

const Error = (props) => {
    const idValue = props.idValue;
    const setIDValue = props.setIDValue;
    const option = props.option;
    const setOption = props.setOption;
  return (
    <div> 
        <h2> Estos no son los droides que esta buscando </h2>
        <img id="obi-img" alt="Obi Wan Kenobi" src="https://i.guim.co.uk/img/media/b87fb48b6e0b8f7c1406904b3aa7f31f71f5aeab/482_0_2680_1608/master/2680.jpg?width=1300&quality=45&dpr=2&s=none" />
        <div>
            <Link to="/"> Volver a probar... </Link>
        </div>
        
    </div>

  )
}

export default Error