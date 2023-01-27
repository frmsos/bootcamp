import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css'
const Home = () => {
    //Declaracion de variables
    const [authors, setAuthors] = useState([]);



    //Declaracion de funciones

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors/get')
        .then( response => {
            setAuthors(response.data.author);
        } )
    },[authors]); //fin useEffect

    return (
    <div>
        <h1>Favorite Autors</h1>
        <Link to="/new">   <h6>  Add an author  </h6>   </Link>
        <h4> We have quotes by: </h4>
        <div className="container text-center">
            <div className="row">
                <div className="col headers">
                    Author
                </div>
                <div className="col headers">
                    Actions Available
                </div>
            </div>

            {
                authors.map ( 
                    (authors, idx) => {
                        return(
                            <div className='row' key={idx}> 
                                <div className="col">
                                    {authors.name}
                                </div>
                                <div className="col">
                                    <Link to={`/edit/${authors._id}`}> 
                                        <button type="button" className="btn btn-info">Edit</button>
                                    </Link>
                                    <Link to={`delete/${authors._id}`}>
                                        <button type="button" className="btn btn-danger">Delete</button>
                                    </Link>
                                </div>

                            </div>
                        )
                    }
                )
            //fin de ciclo js iteraciones    
            }


        </div>
    
    
    
    </div>

    
    
    )
}

export default Home