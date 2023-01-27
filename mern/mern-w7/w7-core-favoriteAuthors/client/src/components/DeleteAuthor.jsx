import React from 'react'
import Home from './Home'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const DeleteAuthor = () => {    
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect( () => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
        .then( () => {
           navigate("/")
        } )
        .catch( () => {
            alert('Please enter a valid ID')
            navigate("/")
        } )
    },[id, navigate]); //fin useEffect



    return <Home/>
    
}

export default DeleteAuthor