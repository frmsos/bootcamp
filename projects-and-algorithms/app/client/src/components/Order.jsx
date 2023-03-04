import {React, useEffect, useState, useRef} from 'react';
import Navbar from './Navbar';
import {Box, Typography, Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import OrderItems from './OrderItems';
import config from './config';




const Order = (props) => {

    //VARIABLES DECLARATIONS
    const theme = createTheme();
    const [order, setOrder] = useState({typeOrder: "", items: []});
    let costoItem = 0;
    let subTotal = 0;
    const {isLoggedIn, setIsLoggedIn, setCartPressed, setCart,setTotalCost, userID} = useContext(userAuth);
    const toppingsData = useRef({});
    const sizesData = useRef({});
    const crustsData = useRef({});
    const navigate = useNavigate();
    const [orderType, setOrderType] = useState("");







    //FUNCTIONS DECLARATIONS
    const handleSubmitOrder = (e) => {
        e.preventDefault();
        console.log('submit order', order);
        setCart(order);
        navigate('/checkout');
    }

    const costoTotal = (subTotal) =>{
        setTotalCost(subTotal + 15000); //mas costo de delivery
        return subTotal + 15000;
    }

    const calcularCosto = ( topping, amount, size) => {
        let toppingCost = 0;
        let sizeCost = 0;
        if (size !== null)
        {
            console.log('print in here', toppingsData.current)
            let cost = toppingsData.current.toppings.filter( item => item.topping === topping)
            toppingCost = (cost[0].unitaryCost);
            cost = sizesData.current.sizes.filter( item => item.size === size)
            sizeCost = (cost[0].unitaryCost);
        }
        costoItem = amount * (toppingCost + sizeCost);
        subTotal = subTotal + costoItem;
        return costoItem;

    }

    const calcularSubtotal = ()=>{
        
        if(order.items.length !== 0){
            let costoo =0;
            console.log('order subtotal',order.items[0].topping);
            console.log(order.items.length)
            for( let i=0; i<order.items.length;i++)
            {
                costoo += calcularCosto(order.items[i].topping, order.items[i].amount, order.items[i].size)
            }
            console.log('subbbb', costoo)
            return costoo;
        }
        return 0;
    }


    useEffect( () => {
        //IMPORTAMOS LOS VALORES ALMACENADOS EN LA DB, RELATIVOS A LOS SABORES, TAMANOS Y CRUST CON SUS COSTOS
        axios.get(`${config.url}/api/pizzapp/toppings/get`,{withCredentials : true})
        .then(response => {
            toppingsData.current = response.data;
           // console.log(toppingsData.current);
        })
        .catch( errorMsg =>{
            setIsLoggedIn(false);
            setCartPressed(false);
        })
        axios.get(`${config.url}/api/pizzapp/sizes/get`,{withCredentials : true})
        .then(response => {
            sizesData.current = response.data;
            //console.log('sizes', response.data);
        })
        .catch( errorMsg =>{
            setIsLoggedIn(false);
            setCartPressed(false);
        })
        axios.get(`${config.url}/api/pizzapp/crusts/get`,{withCredentials : true})
        .then(response => {
            crustsData.current = response.data;
            //console.log('crust', response.data);
        })
        .catch( errorMsg =>{
            setIsLoggedIn(false);
            setCartPressed(false);
        })
        // eslint-disable-next-line
    }, [costoItem]  ); 
    
    return (
        <div>
            <Navbar itemCount={props.itemCount} setItemCount={props.setItemCount}/>
            <ThemeProvider theme={theme}>
                <div className='containerPage'>
                        <div className='containerSides'>
                            <OrderItems order={order} setOrder={setOrder} requestItem={props.requestItem} setRequestItem={props.setRequestItem} orderType={orderType} setOrderType={setOrderType}/>
                        </div>
                    <div className='containerSides'>
                        <Typography variant='h3' sx={{fontWeight:'bold', m:2} }> Historial de Pedidos </Typography>
                            <OrderHistory/>
                    </div>
                    <div className='containerSides'>
                        <Typography variant='h3' sx={{fontWeight:'bold', m:2} }> Resumen de Orden </Typography>
                        <Typography variant='h6' sx={{fontWeight:'bold', m:2, display: 'inline-block'} }> Tipo de orden: </Typography>
                        <Typography variant='h6' sx={{fontWeight:'normal', m:2, display: 'inline-block'} }> {orderType} </Typography>
                        <Typography variant='body1' sx={{fontWeight:'normal', m:2} }>
                            <ul>
                            {
                                order.items.map (   
                                    (details, index) => {
                                        return(
                                            <li key={index}>
                                            <Typography variant='body1' sx={{fontWeight:'normal', m:2}}>
                                                    {`${details.amount} Pizza(s) ${details.size}(s) de ${details.topping}   |   ${details.crust}` }
                                            </Typography>
                                            <Typography variant='body1' sx={{fontWeight:'normal', m:2}} >
                                                    Costo Parcial: Gs.{calcularCosto(details.topping, details.amount, details.size, details.cost )}
                                            </Typography>
                                            </li>        
                                        )
                                    }
                                )
                                
                            }
                            </ul>
                        </Typography>
                        <Typography variant='h5' sx={{fontWeight:'bold', m:2}} >
                                Subtotal   -   Gs.{ calcularSubtotal()}
                        </Typography>
                        <Typography variant='h5' sx={{fontWeight:'bold', m:2}} >
                                    Delivery    -    Gs.  15000
                        </Typography>
                        <Typography variant='h5' sx={{fontWeight:'bold', m:2, color: 'red'}} >
                                    Total    -    Gs.{ costoTotal(calcularSubtotal())}
                        </Typography>
                        <Typography variant='h6' sx={{fontWeight:'bold', m:2, color: 'red'}} >
                                    Impuesto al Valor Agregado (10%)    -    Gs.{ Math.ceil((calcularSubtotal() + 15000)/11)}
                        </Typography>
                        <Box component="form" noValidate onSubmit={e=> handleSubmitOrder(e)}>
                            {order.items.length === 0 ? null :
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                id = 'AddToCard'
                                sx={{ mt: 3, mb: 2, ml: 1, bgcolor : "#008C45", width: "50%", display: 'block' }}
                                >
                                Proceder
                            </Button>
                            }
                        </Box>
                    </div>
                </div>           

            </ThemeProvider>
        </div>
    )
}

export default Order