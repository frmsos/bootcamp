import '../App.css';
import React, {useState, useEffect} from 'react';
import {Link,useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

//la idea es reutilizar este componente tanto
//para el edit como para el create author

const AuthorPage = (props) => {
    const navigate = useNavigate();
    const {id} = useParams(); 
    //alert(id);
    console.log(props.showSelected);
    const [name, setName] = useState('');
    const clickSubmit = (e)=> {
        //al darle submit tenemos dos opciones
        //si vamos a crear o estamos editando
        e.preventDefault();
        props.showSelected ?
            axios.post('http://localhost:8000/api/authors/create', {
                name: name
            })
            .then(response => {
                console.log('submit successful',response);
                navigate('/');
            })
            .catch(() => alert('The author name must be at 3 characters long, please try again..'))
        : 
            axios.put(`http://localhost:8000/api/authors/update/${id}`, {
                name: name
            })
            .then(response => {
                console.log('update successful',response);
                navigate('/');
            })
            .catch(() => alert('The author name must be at 3 characters long, please try again..')) 
    }

    useEffect( () => {
        axios.get(`http://localhost:8000/api/authors/get/${id}`)
        .then( 
            props.showSelected ? 
                null
            :
                    response => {
                    setName(response.data.author.name);
                } 
            )
        .catch(  () => {
                alert('Entered an invalid id, please try again...');
                navigate('/');

        }   )
        //eslint-disable-next-line
    },[id]); //fin useEffect


    return (
        <div>
            <h1>Favorite Autors</h1>
            <Link to="/*">   <h6>  Home  </h6>   </Link>
            {props.showSelected ? <h4>  Add a new author: </h4> : <h4> Edit this author  </h4> }
            <form>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={ event => setName(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-warning mt-2 mr-3" onClick={() => navigate('/')}>Cancel</button>
                <button type="button" className="btn btn-success mt-2 ml-3" onClick={clickSubmit}  >Submit</button>
                </form>
        </div>
    )
}

export default AuthorPage