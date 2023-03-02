import {React, useEffect, useState, useRef, useContext}  from 'react'
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ValidateAuth = () => {
    const {isLoggedIn, setIsLoggedIn,setUserID, userID, } = useContext(userAuth);
    const navigate = useNavigate
    //hay que revalidar que el token siga siendo valida
    if( isLoggedIn  ){
        axios.get(`http://localhost:8000/api/pizzapp/users/${userID}`,{withCredentials : true}) 
        .then(() => {
            console.log('se revalida el acceso')
            return true;
        }
        )
        .catch(
            error => {
                console.log('error revalidating', error);
                setIsLoggedIn(false);
                setUserID(null);
                window.localStorage.removeItem("loginStatus");
                window.localStorage.removeItem("userID");
                navigate('/home');
            }
            
        );
    }

}

export default ValidateAuth