import {React, useEffect, useState, useContext} from 'react';
import Navbar from './Navbar';
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';
import { Button,  Box,  Typography, Alert, Stack, CardActions, CardContent} from '@mui/material';
import {useForm} from 'react-hook-form';
import InputAddress from './InputAddress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useNavigate } from 'react-router-dom';


//FUNCTIONS DECLARATION

const Checkout = (props) => {
    //VARIABLES DECLARATION
    // eslint-disable-next-line
    const {isLoggedIn, setIsLoggedIn, setCartPressed, cart, setCart, setUserID, userID, totalCost} = useContext(userAuth);
    const [addresses, setAddresses] = useState({});
    // eslint-disable-next-line
    const states = [ {label: 'Alto Paraguay' }, {label: 'Alto Paraná'}, {label: 'Amambay'}, {label: 'Asunción - Capital'}, {label: 'Boquerón'} , 
    {label: 'Caaguazú'}  , {label: 'Caazapá'}, {label: 'Canindeyú'} ,  {label:'Central'},  {label:'Concepción'},  {label:'Cordillera'}, 
    {label:'Guairá'},  {label:'Itapúa'},  {label:'Misiones'},  {label:'Ñeembucú'},  {label:'Paraguarí'},  {label:'Presidente Hayes'},  {label:'San Pedro'} ];
    // eslint-disable-next-line
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [showAddr, setShowAddr] = useState("doNotShowAddr");
    const [opMode, setOpMode] = useState(null);
    const [addrID, setAddrID] = useState(0);
    const [vectorAddrIndex, setVectorAddrIndex] = useState(null);
    const [isAddr, setIsAddr] = useState(false);
    const [indexAddr, setIndexAddr] = useState();
    let isDelivery = true;
    const [open, setOpen] = useState(false);
    const [placeOrderOK, setPlaceOrderOK] = useState(false);
    const [placeOrderNotOK, setPlaceOrderNotOK] = useState(false);
    const navigate = useNavigate();

    
    const handleClickOpen = () => {
        setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };


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

    const isChosenAddr = (index)=>{
        return indexAddr === index
    }

    const handlePlaceOrder = ( e ) =>{
        e.preventDefault();
        console.log('place order', cart.items)

        if(isAddr){
        axios.post('http://localhost:8000/api/pizzapp/order', 
        {
            userID: userID,
            typeOrder: cart.typeOrder,
            address: cart.address,
            items: cart.items
        },{withCredentials:true }
        )
        .then( (response) => {
            console.log('orden exitosa', response.data);
            window.localStorage.removeItem("itemCount");
           // window.localStorage.setItem([]);
            setPlaceOrderOK(true);
            setPlaceOrderNotOK(false);
            window.localStorage.setItem('requestItem', JSON.stringify([]))
            window.localStorage.setItem('itemCount', JSON.stringify(0))
            setTimeout(() => { navigate('/home');}, 2500);

        } )
        .catch( (errorMsg) =>{
            console.log('orden error', errorMsg);
            setPlaceOrderOK(false);
            setPlaceOrderNotOK(true);
        }  )
    }
    else{
        handleClickOpen();
    }
    }


    const handleChooseAddr = (e, chooseAddr, index) =>{
        e.preventDefault();
        console.log('choose addr', chooseAddr);
        //Formar vector final de orden
        setCart( {...cart, address: chooseAddr}  )
        console.log('cart is', cart)
        setIsAddr(true);
        setIndexAddr(index);
        
    }
    isDelivery = (cart.typeOrder === 'Delivery' )
    console.log('is del value', cart, isDelivery);
    useEffect( ()=> {
        if( userID !==0){
            axios.get(`http://localhost:8000/api/pizzapp/users/${userID}`,{withCredentials : true}) 
            .then(response => setAddresses(response.data.user.addresses))
            .catch(error => console.log('error on edit page submit', error));
            console.log( 'useeefecttt', addresses)
        }
        else{
            setUserID(JSON.parse(window.localStorage.getItem('userID')))
        }
         // eslint-disable-next-line
    },[userID,isDelivery, cart.type]

    


    )
    return (
        <div>

        <Stack sx={{ width: '100%' }} spacing={2}>
            { placeOrderNotOK ?  <Alert severity="error">Error: verifique los datos introducidos y vuelva a probar</Alert> : null} 
            { placeOrderOK ? <Alert severity="success">Orden procesada, redirigiendo a la página principal</Alert> : null}
        </Stack>

        <Navbar itemCount={props.itemCount} setItemCount={props.setItemCount}/>

            <div>

            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Complete los campos obligatorios"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Debe seleccionar una de las direcciones de envío para proceder con su pedido.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        OK
                    </Button>
                    </DialogActions>
                </Dialog>

            </div>


            
                
                    <div>
                        <div className='containerPage'>
                        { isDelivery ?  
                        <div>
                        <div className='containerSides'>

                                <Box>
                                    <Typography variant='h4' sx={{fontWeight:'bold', m:2} }> Dirección de envío </Typography>
                                    <Typography variant='body1' sx={{fontWeight:'normal', m:2} }> Favor seleccionar una dirección de envío: </Typography>
                                    {   addresses.length > 0 ? 
                                            addresses.map(  (address, index) => {
                                                return(
                                                    <Box sx={{ minWidth: 275 }} id={ isChosenAddr(index) ? "addrChoose"  : 'notchoose' }>
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
                                                            <Button size="small" onClick={e=> handleChooseAddr(e, address, index)}>Elegir</Button>
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
                            <InputAddress  showAddr={showAddr} setShowAddr={setShowAddr} opMode={opMode} addrID={addrID} vectorAddrIndex={vectorAddrIndex} addresses={addresses} userID={userID} cart={cart} setCard={setCart}/>
                        </div>
                    </div>
                    : null}
                    <div className='containerSides'>
                        <Typography variant='h4' sx={{fontWeight:'bold', m:2} }> Carrito de Salida - Checkout </Typography>
                        <Typography variant='h5' sx={{fontWeight:'bold', m:2} }> {cart.typeOrder} </Typography>
                        { isDelivery  && cart.address ?
                            <Box sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {`Dirección seleccionada`}
                                </Typography>
                                <Typography variant="body2">
                                    Calle: {cart.address.street}
                                </Typography>
                                <Typography variant="body2">
                                    Ciudad: {cart.address.city}
                                </Typography>
                                <Typography variant="body2">
                                    Departamento: {cart.address.state}
                                </Typography>
                            </CardContent>
                        </Box>
                        :null}
                        <Box sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {`Costo Total `}
                                </Typography>
                                <Typography variant="h5" sx={{color:'red'}}>
                                    Gs. {totalCost}
                                </Typography>
                            </CardContent>
                            <Button size="small" variant="contained" color="success" sx={{m:2, width: 150}} onClick={ e=> handlePlaceOrder(e)}>Pedir</Button>
                            <Button size="small" variant="contained" color="error" sx={{m:2, width: 150}} onClick={ e=> handleClickAddAddress(e, "add")}>Cancelar pedido</Button>
                        </Box>

                    </div>
                </div>

            </div>            
        </div>
    )
}

export default Checkout