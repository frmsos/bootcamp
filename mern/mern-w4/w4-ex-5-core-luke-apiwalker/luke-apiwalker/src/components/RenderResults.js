import React from 'react';
import axios from 'axios';
import { useState } from 'react';



const RenderResults = (props) => {
console.log('llegue a la funcion de render', props.clicked); 
const clicked = props.clicked;
const [renderData, setRenderData] = useState('');
    if(clicked){
            const url =  'https://swapi.dev/api/' + props.option.toLowerCase() + '/' + props.idValue;
            console.log(url);
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
                    alert('errrrrrrroor');
                });
                props.setClicked(false);
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
        

    jgk
    
    </div>
  )
}

export default RenderResults
