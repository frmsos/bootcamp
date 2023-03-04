import {React, useEffect, useState, useRef, useContext}  from 'react'
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from './config';

const ValidateAuth = () => {
    const {isLoggedIn, setIsLoggedIn,setUserID, userID, } = useContext(userAuth);
    const [checkStatus, setCheckStatus] = useState(false);
    const loggedIn = useRef();
    //hay que revalidar que el token siga siendo valida

    useEffect( ()=>{

        //si se tiene un userID no valido, se debe redirigir
        if( userID === 0 || userID === undefined || userID === null )
        {
            console.log('se ingreso un user id no valido')
            loggedIn.current = false;
            setCheckStatus(true);

        }
        //se ingrso un user id valido
        else{
            axios.get(`${config.url}/api/pizzapp/users/${userID}`,{withCredentials : true}) 
            .then(() => {
                console.log('acceso validado');
                loggedIn.current = true;
                setCheckStatus(true);
            })
            .catch( errorMsg => {
                console.log('acceso no valido error', errorMsg);
                loggedIn.current = false;
                setCheckStatus(true);
            })
        }
        console.log('se imprime el check status', checkStatus, loggedIn.current)

    }, [loggedIn, checkStatus, userID])
    return { loggedIn, checkStatus }
}

export default ValidateAuth