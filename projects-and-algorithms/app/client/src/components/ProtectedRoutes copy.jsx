import {React, useEffect, useState, useRef, useContext}  from 'react'
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import Home from './Home';



const ProtectedRoutes = () => {
    const navigate = useNavigate();
    const [isReady, setIsReady] = useState("");
    const [fetchStatus, setFetchStatus] = useState(false);
    let isAuth;

    //funcion de validacion de acceso valido
    const ValidateAuth =  () => {
        const { setIsLoggedIn,setUserID, isLoggedIn } = useContext(userAuth);
        const userid = (JSON.parse(window.localStorage.getItem('userID')));
        console.log('calling validate auth', isLoggedIn, userid)
        //console.log('user id en validate is', userID )
        //console.log('test', userid !==0 && userid !== null && userid !== undefined)
        if( isLoggedIn ) 
        {
            console.log('aca');
            axios.get(`http://localhost:8000/api/pizzapp/users/${userid}`,{withCredentials : true}) 
            .then(() => 
            {
                console.log('se revalida el acceso');
                setIsReady(true);
                setFetchStatus(true);
            }
            )
            .catch(
                error => {
                    console.log('error revalidating', error);
                    setIsLoggedIn(false);
                    setUserID("ffffffffffffffffffffffff");
                    window.localStorage.removeItem("loginStatus");
                    window.localStorage.removeItem("userID");
                    setFetchStatus(true);
                    setIsReady(false)
                }
            );
        }
        else
        {
            console.log('por false')
            setIsReady(false)
            setFetchStatus(true);
        }
        console.log('dfed', userid)
        return false;
    } 
    


    useEffect( ()=>{
        if( isReady === true || isReady === false)
        {
            console.log('ssss', isReady)
            return isReady ? <Outlet/> : navigate('/home')
        }
        else{
            console.log('ava')
        }

    },[fetchStatus]

    )

    //llamamos a la funcion de validacion
   // console.log('isauth before', isAuth)
    isAuth = ValidateAuth();
    console.log('isauth after', isAuth)
    console.log('useeee', isReady)




    

    
}

export default ProtectedRoutes