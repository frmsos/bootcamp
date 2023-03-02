import {React, useEffect, useState, useContext}  from 'react'
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';



const ProtectedRoutes = () => {
    const navigate = useNavigate();
    const [isReady, setIsReady] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const { setIsLoggedIn,setUserID, isLoggedIn } = useContext(userAuth);
    //funcion de validacion de acceso valido
    // const ValidateAuth =   () => {
        

    //     console.log('dfed', userID)
    //     return false;
    // } 
    


    useEffect( ()=>{
        
        const userid = (JSON.parse(window.localStorage.getItem('userID')));
        console.log('calling validate authzzzz', isLoggedIn, userid)
        if( isLoggedIn ) 
        {
            console.log('aca', userid);
            axios.get(`http://localhost:8000/api/pizzapp/users/${userid}`,{withCredentials : true}) 
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
                    setUserID("ffffffffffffffffffffffff");
                    window.localStorage.removeItem("loginStatus");
                    //window.localStorage.removeItem("userID");
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
        // eslint-disable-next-line
    },[]

    )

    //llamamos a la funcion de validacion
   // console.log('isauth before', isAuth)
    console.log('useeee', isReady)
    if( isReady )
    {
        console.log('ssss', isReady)
        return isAuth ? <Outlet/> : navigate('/login')
    }
    else{
        console.log('ava')
    }



    

    
}

export default ProtectedRoutes