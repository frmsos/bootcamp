import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, BrowserRouter} from 'react-router-dom';
const Home = (props) => {
    //Declaracion de variables
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);


    //Declaracion de funciones

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors/get')
        .then( response => {
            setAuthors(response.data.author);
            setLoaded(true);
        } )
    },[]); //fin useEffect

    return (
    <div>
        <h1>Favorite Autors</h1>
        <Link to="/new">   <h6>  Add an author  </h6>   </Link>
        <h4> We have quotes by: </h4>
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    Author
                </div>
                <div className="col">
                    Actions Available
                </div>
            </div>

            {
                authors.map ( 
                    (authors, idx) => {
                        return(
                            <div className='row' key={idx}> 
                                

                            </div>
                        )
                    }
                )
            //fin de ciclo js iteraciones    
            }



            <div className="row">
                <div className="col">
                    Authobcbfdbdfr
                </div>
                <div className="col">
                    Actions vdsvsdvsd
                </div>
            </div>

        </div>
    
    
    
    </div>

    
    
    )
}

export default Home