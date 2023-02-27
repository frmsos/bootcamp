import {React, useEffect, useState, useRef, useContext} from 'react';
import Navbar from './Navbar';
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';





//FUNCTIONS DECLARATION

const Checkout = (props) => {
    //VARIABLES DECLARATION
    const {isLoggedIn, setIsLoggedIn, setCartPressed, cart, setCart} = useContext(userAuth);
    return (
        <div>
            <Navbar itemCount={props.itemCount} setItemCount={props.setItemCount}/>
            {console.log('checkout',cart)}


            
        </div>
    )
}

export default Checkout