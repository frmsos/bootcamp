import {createContext} from 'react'

export const userAuth = createContext({
    isLoggedIn: false,
    setIsLoggedIn: ()=>{},
    cartPressed: false,
    setCartPressed: ()=>{},
    cart: {},
    setCard: ()=>{},
    userID: 0,
    setUserID: ()=>{},
    selectedAddr : "",
    setSelectedAddr : () =>{},
    totalCost : 0,
    setTotalCost: ()=>{}
    
});

