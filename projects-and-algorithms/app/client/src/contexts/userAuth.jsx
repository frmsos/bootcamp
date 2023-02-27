import {createContext} from 'react'

export const userAuth = createContext({
    isLoggedIn: false,
    setIsLoggedIn: ()=>{},
    cartPressed: false,
    setCartPressed: ()=>{},
    cart: {},
    setCard: ()=>{}
});

