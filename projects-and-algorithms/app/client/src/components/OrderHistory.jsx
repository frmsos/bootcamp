import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useContext } from 'react';
import { userAuth } from '../contexts/userAuth';

const OrderHistory = () => {
    const [orderHistoryArray, setOrderHistoryArray] = useState([]);
    const { userID, setUserID } = useContext(userAuth);
    console.log('order history component',orderHistoryArray, userID );
    
    useEffect( ()=> {
        if( userID !==0) {
            axios.get(`http://localhost:8000/api/pizzapp/orderhistory/${userID}`,{withCredentials : true})
            .then(response => {
                console.log('orderhistory', response.data.orderHistory);
                setOrderHistoryArray(response.data.orderHistory);

            })
            .catch( errMsg => {
                console.log('error getting order history' , errMsg)
            })
        }else{
            setUserID(JSON.parse(window.localStorage.getItem('userID')))
        }
    }

    ,[]);

    return (
        <div>
        {orderHistoryArray.length>0 ?
                orderHistoryArray.map( (values, index) => { return( 
                    <Box sx={{ maxWidth: 400, mt:4 }} key={index}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Pedido Número {index +1 }
                                </Typography>
                                { values.items.map(  (item, index) => {return (
                                    <Typography sx={{ mb: 1.5 }}>
                                        {item.amount} Pizza(s) de {item.topping} de {item.crust} Tamaño {item.size}
                                    </Typography>

                                )})}
                            </CardContent>
                        </Card>
                    </Box>
            )})
            : 'Sin pedidos recientes'}



            
        </div>
    )
}

export default OrderHistory