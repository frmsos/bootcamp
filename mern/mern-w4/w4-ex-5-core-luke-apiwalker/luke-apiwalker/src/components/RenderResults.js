import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Navigate} from 'react-router-dom';




const RenderResults = (props) => {
const [isError, setIsError] = useState(false);
const clicked = props.clicked;
const setClicked = props.setClicked;
console.log('llegue a la funcion de render'); 
const [renderData, setRenderData] = useState('');



console.log('estoyyyyy aca');



    if(clicked){

        
        const url =  'https://swapi.dev/api/' + props.option.toLowerCase() + '/' + props.idValue;
        console.log('esta es la url:', url);
        axios.get(url)
            .then(response => {
                return response.data;
            })
            .then(response => {
                //console.log('antes' , response);
                setRenderData(response);
                // console.log('despues' , renderData);
            })
            .catch(err=>{
                console.log('estoy en error',url);
                setIsError(true);
            });
            setClicked(false);
    }

    return (
    <div>
        {
        <ul>
            {renderData.length !== 0 ? Object.keys(renderData).map( (key, index) =>{
                return <li key={index}>   {key} :  {renderData[key]}  </li> ;
            }  ) : null}
        </ul> 


    
    }
    { isError ? <Navigate to="/error"/>: null}
    </div>
    )
}

export default RenderResults
