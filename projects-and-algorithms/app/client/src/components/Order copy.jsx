import {React, useEffect, useState} from 'react';
import Navbar from './Navbar';
import {Box, Grid, Autocomplete, Typography, Button, TextField, Card, CardActions, CardContent, CardMedia, IconButton} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useForm} from 'react-hook-form';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';




const Order = (props) => {

    //VARIABLES DECLARATIONS
    const method_options = [  "Delivery" , "Carry-Out" ];
    const crust_options = [ "Masa fina", "Masa gruesa"];
    const size_options = [ "Pequeño",  "Mediano",  "Grande" ] ;
    const qty_options =[ "1",  "2", "3"];
    let name = "";
    const theme = createTheme();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [order, setOrder] = useState({type: "", items: []});
    const [opMode, setOpMode] = useState("");
    let costoItem = 0;
    let showButton;
    const [orderType, setOrderType] = useState("");
    let subTotal = 0;
    const {isLoggedIn, setIsLoggedIn, setCartPressed} = useContext(userAuth);
    const [toppingsData, setToppingsData] = useState(null);
    const [sizesData, setSizesData] = useState(null);
    const [crustsData, setCrustsData] = useState(null);
    const [sizeValue, setSizeValue] = useState(null);
    const [amountValue, setAmoutValue] = useState(null);








    //FUNCTIONS DECLARATIONS
    const onSubmit = (data, pizzatopping, operation) => {
        const item = {
            topping : pizzatopping,
            size : data.size,
            crust: data.crust,
            amount : data.amount
        }
        let modifiedVector;
        if( operation === 'add')
        {
            setOrder( {...order, items: [...order.items, item]} );
            //setOpMode(null);
        }
        else{
            //console.log('cjec', order.items)
            const [isThereBool, indexFound] = isThere(pizzatopping, order.items, "boolIndex");
            //console.log(isThereBool, indexFound);
            modifiedVector = order.items;
            modifiedVector[indexFound] = item;
            setOrder({...order, items: modifiedVector})
        }

        //is there para ver si ya esta,

        //si no, esto
        

        // si ya esta, hay que actualizar
        //con filter un nueva vector
        //...new vector , datanew set order
        //se va a sobreescribir el vector order
        //console.log(item)
        console.log('order',order)
      //  console.log("prueba print", order.items[0].topping)

    };
    const isThere = (pizzatopping, requestItem, operation) =>{
        //alert(pizzatopping)
        for(let i = 0; i < requestItem.length; i++)
        {
            if(requestItem[i].topping === pizzatopping)
                
                {
                    if( operation === 'bool' )
                    {                        
                        return true;
                    }
                    else
                        return [true, i]
                }

        }
        //alert('is not here')
        if( operation === 'bool' )
            return false;
        else
            return [false, null]
    }
    const handleToppingRemove = (event, pizzatopping, requestItem) =>{
        event.preventDefault();
        const newRequestedItem = requestItem.filter(item => item !== pizzatopping );
        props.setRequestItem( newRequestedItem);
        console.log('antes', order.items)
        const newOrderVector = order.items.filter(item => item.topping !== pizzatopping);
        setOrder( {...order, items: newOrderVector} );

        console.log('despues', order.items)
        props.setItemCount(prev=> prev - 1);
    }
    const calcularCosto = ( topping, amount, size) => {
        let toppingCost = 0;
        let sizeCost = 0;

        if (size !== null)
        {
            console.log('print in here', toppingsData)
            let cost = toppingsData.toppings.filter( item => item.topping === topping)
            toppingCost = (cost[0].unitaryCost);
            cost = sizesData.sizes.filter( item => item.size === size)
            sizeCost = (cost[0].unitaryCost);
        }
        costoItem = amount * (toppingCost + sizeCost);
        subTotal = subTotal + costoItem;
        return costoItem;

    }
    const calcularParcial = topping =>{
        //console.log('sss', topping, amountValue, sizeValue)
        let costo = calcularCosto( topping, amountValue, sizeValue );
        
        return costo;
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
        axios.get('http://localhost:8000/api/pizzapp/toppings/get',{withCredentials : true})
        .then(response => {
            console.log(response.data);
            setToppingsData(response.data)
            //console.log('state',toppingsData)
        })
        .catch( errorMsg =>{
            setIsLoggedIn(false);
            setCartPressed(false);
        })
        axios.get('http://localhost:8000/api/pizzapp/sizes/get',{withCredentials : true})
        .then(response => {
           // console.log(response.data);
            setSizesData(response.data)
        })
        .catch( errorMsg =>{
            setIsLoggedIn(false);
            setCartPressed(false);
        })
        axios.get('http://localhost:8000/api/pizzapp/crusts/get',{withCredentials : true})
        .then(response => {
           // console.log(response.data);
            setCrustsData(response.data)
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
                        <Typography variant='h3' sx={{fontWeight:'bold', m:2} }> Nuevo Pedido </Typography>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    onChange = {(e, value)=> setOrderType(value) }
                                    options={method_options}
                                    isOptionEqualToValue = { (option, value) => option.value === value.value}
                                    sx={{ width: 300, p: 2 }}
                                    renderInput={(params) => <TextField {...params} required label="Tipo de orden" {...register("type", { required: true })}
                                    error={!!errors?.type}                        
                                    helperText = { errors?.type ? "Debe elegir una de las opciones" : null }/>}
                                    
                                    
                                />
                                {  props.requestItem.map(  (pizzatopping,index) => {
                                    name = pizzatopping.charAt(0).toUpperCase() + pizzatopping.slice(1);  
                                    return (
                                        <Box component="form" noValidate onSubmit={ handleSubmit( data => onSubmit(data, pizzatopping, opMode))}>
                                            <Grid container item xs={12} key={index} spacing={3} sx={{p:3}} id="Card">
                                                <Card sx={{ maxWidth: 500, p:2 }} id='Card'>
                                                    <CardMedia
                                                        component="img"
                                                        alt="pizza flavor"
                                                        height="140"
                                                        image={require(`../images/menu/${pizzatopping}.jpeg`)}                                
                                                    />
                                                    <CardContent id='Card'>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                        {`${name}`}
                                                        </Typography>
                                                        <Grid item xs={12} key={index} spacing={1} id='Card' >
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={size_options}
                                                                onChange = { (e,v) => setSizeValue(v)}
                                                                isOptionEqualToValue = { (option, value) => option.value === value.value}
                                                                sx={{ width: 220, p: 2, display:'block' }}
                                                                renderInput={(params) => <TextField {...params} label="Tamaño" {...register("size", { required: true }) }
                                                                error={!!errors?.size}                        
                                                                helperText = { errors?.size ? "Debe elegir una de las opciones" : null }/>}
                                                            />
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={crust_options}
                                                                isOptionEqualToValue = { (option, value) => option.value === value.value}
                                                                sx={{ width: 220, p: 2, display:'block' }}
                                                                renderInput={(params) => <TextField {...params} label="Masa" {...register("crust", { required: true })}
                                                                error={!!errors?.crust}                        
                                                                helperText = { errors?.crust ? "Debe elegir una de las opciones" : null }/>}
                                                            />
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={qty_options}
                                                                onChange = {(e,v) => setAmoutValue(v)}
                                                                isOptionEqualToValue = { (option, value) => option.value === value.value}
                                                                sx={{ width: 220, p: 2, display:'block' }}
                                                                renderInput={(params) => <TextField {...params} label="Cantidad" {...register("amount", { required: true })}
                                                                error={!!errors?.amount}                        
                                                                helperText = { errors?.amount ? "Debe elegir una de las opciones" : null }/>}
                                                            />
                                                            <Typography variant='h5' sx={{fontWeight:'normal', m:2, color: 'red'}}>
                                                                Gs. {calcularParcial(pizzatopping)}
                                                            </Typography>  
                                                                
                                                        </Grid>
                                                    </CardContent>
                                                    <CardActions>
                                                        <IconButton size="small" onClick={ e => handleToppingRemove(e, pizzatopping, props.requestItem )}>
                                                            <RemoveIcon/> Quitar
                                                        </IconButton>
                                                    </CardActions>
                                                </Card>
                                                    {showButton = isThere(pizzatopping, order.items, 'bool')}
                                                        {!(showButton) ? 
                                                        <Button
                                                            type="submit"
                                                            fullWidth
                                                            variant="contained"
                                                            onClick={e=> setOpMode("add")}
                                                            id = 'AddToCard'
                                                            sx={{ mt: 3, mb: 2, ml: 1, bgcolor : "#008C45", width: "50%", display: 'block' }}
                                                            >
                                                            Agregar al carrito
                                                        </Button> 
                                                    : 
                                                    <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        onClick={e=> setOpMode("modify")}
                                                        sx={{ mt: 3, mb: 2, ml: 1, bgcolor : "#ffa500", width: "50%" }}
                                                        >
                                                        Modificar
                                                    </Button> 
                                                    }
                                                </Grid>
                                            </Box>
                                        
                                )}  )   }
                            </div>
                    <div className='containerSides'>
                        <Typography variant='h3' sx={{fontWeight:'bold', m:2} }> Historial de Pedidos </Typography>
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
                                Subtotal Gs.{ calcularSubtotal()}
                        </Typography>
                    </div>
                </div>           

            </ThemeProvider>
        </div>
    )
}

export default Order