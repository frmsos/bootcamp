import {React, useEffect, useState, useRef, useContext}  from 'react'
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import Home from './Home';



const ProtectedRoutes = () => {
    const navigate = useNavigate();
    const [isReady, setIsReady] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const { setIsLoggedIn,setUserID, isLoggedIn, userID } = useContext(userAuth);
    //funcion de validacion de acceso valido
    // const ValidateAuth =   () => {
        

    //     console.log('dfed', userID)
    //     return false;
    // } 
    


    useEffect( ()=>{
        console.log('calling validate auth', isLoggedIn, userID)
        if( isLoggedIn ) 
        {
            console.log('aca');
            axios.get(`http://localhost:8000/api/pizzapp/users/${userID}`,{withCredentials : true}) 
            .then(() => 
            {
                console.log('se revalida el acceso');
                setIsReady(true);
                setIsAuth(true);
            }
            )
            .catch(
                error => {
                    console.log('error revalidating', error);
                    setIsLoggedIn(false);
                    setUserID(0);
                    window.localStorage.removeItem("loginStatus");
                    window.localStorage.removeItem("userID");
                    //setFetchStatus(true);
                    setIsReady(true)
                    setIsAuth(false);
                }
            );
        }
        else
        {
            console.log('por false')
            setIsReady(true)
            setIsAuth(false)
        }

    },[]

    )

    //llamamos a la funcion de validacion
   // console.log('isauth before', isAuth)
    console.log('useeee', isReady)
    if( isReady )
    {
        console.log('ssss', isReady)
        return isAuth ? <Outlet/> : navigate('/home')
    }
    else{
        console.log('ava')
    }



    

    
}

export default ProtectedRoutes