import './App.css';
import React,  {useState} from 'react';
import axios from 'axios';
function App() {
  const [pokeVector, setPokeState]  = useState([]);

  const onClick = (e) => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response => {
            return response.data;
        })
        .then(response => {
          setPokeState(...pokeVector, response);
          console.log(response);
        })
        .catch(err=>{
            console.log(err);
        });


  }

  return (
    <div className="mainContainer">
        <button className="fetchButton" onClick={onClick}> Fetch Pokemon   </button>
        <div>
        <ul>
            {
                
               pokeVector.length !== 0 ? pokeVector.results.map( (item, index) => {
                    return <li key={index}> {item.name}  </li> ;
                } ) : ""

            }


        </ul>
    </div>
  </div>
  );
}

export default App;




