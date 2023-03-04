import {React, useState, useContext}  from 'react'
import { userAuth } from '../contexts/userAuth';
import { Outlet, useNavigate } from 'react-router-dom';
import ValidateAuth from './validateAuth2';
import CircularProgress from '@mui/material/CircularProgress'



const ProtectedRoutes = () => {
    const navigate = useNavigate();
    const [isReady, setIsReady] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const { setIsLoggedIn,setUserID, isLoggedIn } = useContext(userAuth);


    const {loggedIn , checkStatus} = ValidateAuth()

    if( checkStatus )
    {
        console.log('termino el proceso de validacion, valor del estado de login', loggedIn.current, checkStatus)
        return loggedIn.current ? <Outlet/> : navigate('/login')
    }
    else{
        console.log('todavia no termio el proceso de validacion');
        return <CircularProgress className='app__modal-loader' />
    }

    
}

export default ProtectedRoutes