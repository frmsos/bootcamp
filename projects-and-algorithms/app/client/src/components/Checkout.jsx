import {React, useEffect, useState, useRef, useContext} from 'react';
import Navbar from './Navbar';
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';
import {Avatar, Button, CssBaseline, TextField, Paper, Box, Autocomplete, Grid, Typography, IconButton, Alert, Stack, Card, CardActions, CardContent} from '@mui/material';
import {useForm} from 'react-hook-form';
import InputAddress from './InputAddress';



//FUNCTIONS DECLARATION

const Checkout = (props) => {
    //VARIABLES DECLARATION
    const {isLoggedIn, setIsLoggedIn, setCartPressed, cart, setCart, userID} = useContext(userAuth);
    const [addresses, setAddresses] = useState({});
    const states = [ {label: 'Alto Paraguay' }, {label: 'Alto Paraná'}, {label: 'Amambay'}, {label: 'Asunción - Capital'}, {label: 'Boquerón'} , 
    {label: 'Caaguazú'}  , {label: 'Caazapá'}, {label: 'Canindeyú'} ,  {label:'Central'},  {label:'Concepción'},  {label:'Cordillera'}, 
    {label:'Guairá'},  {label:'Itapúa'},  {label:'Misiones'},  {label:'Ñeembucú'},  {label:'Paraguarí'},  {label:'Presidente Hayes'},  {label:'San Pedro'} ];
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [showAddr, setShowAddr] = useState("doNotShowAddr");
    const [opMode, setOpMode] = useState(null);
    const [addrID, setAddrID] = useState(0);
    const [vectorAddrIndex, setVectorAddrIndex] = useState(null);


    const handleClickAddAddress = (e, opMode, addressID, index) =>{
        e.preventDefault();
        setShowAddr("showAddr");
        if(opMode === 'add'){
            setOpMode('add');
        }
        else{
            if(opMode === 'edit'){
                setOpMode('edit');
                setAddrID(addressID);
                setVectorAddrIndex(index);
            }
        }

    }

    useEffect( ()=> {
        axios.get(`http://localhost:8000/api/pizzapp/users/63fab4f8fb63ef81fd959442`,{withCredentials : true}) 
        .then(response => setAddresses(response.data.user.addresses))
        .catch(error => console.log('error on edit page submit', error));
        console.log( 'useeefecttt', addresses)
    },[]



    )
    return (
        <div>
            <Navbar itemCount={props.itemCount} setItemCount={props.setItemCount}/>
                
            <div>
                
                {/* {addresses.length !==0 ? addresses[0].street : null} */}
                <div className='containerPage'>
                    <div className='containerSides'>
                            user id is: ta ta ta tan{userID}
                            bingpot
                            <Box>
                                <Typography variant='h4' sx={{fontWeight:'bold', m:2} }> Dirección de envío </Typography>
                                <Typography variant='body1' sx={{fontWeight:'normal', m:2} }> Favor seleccionar una dirección de envío: </Typography>
                                {   addresses.length > 0 ? 
                                        addresses.map(  (address, index) => {
                                            return(
                                                <Box sx={{ minWidth: 275 }}>
                                                    <CardContent>
                                                        <Typography variant="h5" component="div">
                                                            {`Dirección ${index + 1}`}
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Calle: {address.street}
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Ciudad: {address.city}
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Departamento: {address.state}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button size="small" >Elegir</Button>
                                                        <Button size="small" onClick={e=> handleClickAddAddress(e, "edit", address._id, index)}>Editar</Button>
                                                        <Button size="small">Quitar</Button>
                                                    </CardActions>
                                                </Box>
                                            )
                                        } )
                                        
                                    : null  }
                                    <Button size="small" variant="contained" color="success" sx={{m:2}} onClick={ e=> handleClickAddAddress(e, "add")}>Añadir nueva</Button> 
                                </Box>
                    </div>
                    <div className='containerSides' id={showAddr}>
                        <InputAddress  showAddr={showAddr} setShowAddr={setShowAddr} opMode={opMode} addrID={addrID} vectorAddrIndex={vectorAddrIndex} addresses={addresses}/>
                    </div>
                    <div className='containerSides'>
                        <Typography variant='h4' sx={{fontWeight:'bold', m:2} }> Carrito de Salida - Checkout </Typography>
                    </div>
                </div>

            </div>            
        </div>
    )
}

export default Checkout