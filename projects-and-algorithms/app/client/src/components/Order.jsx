import {React, useState} from 'react';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import {Box, Paper, Grid, Autocomplete, Typography, Button, TextField, Card, CardActions, CardContent, CardMedia, IconButton} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useForm} from 'react-hook-form';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';




const Order = (props) => {

    //VARIABLES DECLARATIONS
    const method = [  "Delivery" , "Carry-Out" ];
    const crust = [ "Masa fina", "Masa gruesa"];
    const size = [ "Pequeño",  "Mediano",  "Grande" ] ;
    const pizzaToppings = ["formaiuiiiooggio", "mozzarella", "marinara", "margherita"];
    const qty =[ "1",  "2", "3"];
    let name = "";
    const theme = createTheme();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [order, setOrder] = useState({type: "", items: []});
    //const [typeValue, setTypeValue] = useState(method[0].label);
    //const [toppingsOrder, setToppingsOrder] = useState([]);
    let showButton;


    //FUNCTIONS DECLARATIONS
    const onSubmit = (data, pizzatopping) => {
        const item = {
            topping : pizzatopping,
            size : data.size,
            crust: data.crust,
            amount : data.amount
        }

        setOrder( {...order, items: [...order.items, item]} );
        //console.log(item)
        console.log(order)
      //  console.log("prueba print", order.items[0].topping)

    };
    const isThere = (pizzatopping, requestItem) =>{
        //alert(pizzatopping)
        for(let i = 0; i < requestItem.length; i++)
        {
            if(requestItem[i] === pizzatopping)
                
                return true;

        }
        return false;
    }
    const handleToppingSelect = (event, pizzatopping) =>{
        event.preventDefault();
        props.setRequestItem( prev => [...prev, pizzatopping]);
        props.setItemCount(prev=> prev + 1);
        console.log('add', props.itemCount, props.requestItem);
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
                                    //onChange = {(e, value)=> alert(value) }
                                    options={method}
                                    isOptionEqualToValue = { (option, value) => option.value === value.value}
                                    sx={{ width: 300, p: 2 }}
                                    renderInput={(params) => <TextField {...params} required label="Tipo de orden" {...register("type", { required: true })}
                                    error={!!errors?.type}                        
                                    helperText = { errors?.type ? "Debe elegir una de las opciones" : null }/>}
                                    
                                    
                                />
                                {  props.requestItem.map(  (pizzatopping,index) => {
                                    name = pizzatopping.charAt(0).toUpperCase() + pizzatopping.slice(1);  
                                    return (
                                        <Box component="form" noValidate onSubmit={ handleSubmit( data => onSubmit(data, pizzatopping))}>
                                            <Grid container item xs={12} key={index} spacing={3} sx={{p:3}} >
                                                <Card sx={{ maxWidth: 500, p:2 }}>
                                                    <CardMedia
                                                        component="img"
                                                        alt="pizza flavor"
                                                        height="140"
                                                        image={require(`../images/menu/${pizzatopping}.jpeg`)}                                
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                        {`${name}`}
                                                        </Typography>
                                                        <Grid item xs={12} key={index} spacing={1} sx={{display: 'flex'}}>
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={size}
                                                                isOptionEqualToValue = { (option, value) => option.value === value.value}
                                                                sx={{ width: 140, p: 2 }}
                                                                renderInput={(params) => <TextField {...params} label="Tamaño" {...register("size", { required: true }) }
                                                                error={!!errors?.size}                        
                                                                helperText = { errors?.size ? "Debe elegir una de las opciones" : null }/>}
                                                            />
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={crust}
                                                                isOptionEqualToValue = { (option, value) => option.value === value.value}
                                                                sx={{ width: 140, p: 2 }}
                                                                renderInput={(params) => <TextField {...params} label="Masa" {...register("crust", { required: true })}
                                                                error={!!errors?.crust}                        
                                                                helperText = { errors?.crust ? "Debe elegir una de las opciones" : null }/>}
                                                            />
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={qty}
                                                                isOptionEqualToValue = { (option, value) => option.value === value.value}
                                                                sx={{ width: 140, p: 2 }}
                                                                renderInput={(params) => <TextField {...params} label="Cantidad" {...register("amount", { required: true })}
                                                                error={!!errors?.amount}                        
                                                                helperText = { errors?.amount ? "Debe elegir una de las opciones" : null }/>}
                                                            />
                                                        </Grid>
                                                    </CardContent>
                                                    <CardActions>
                                                        <IconButton size="small" onClick={ e => handleToppingRemove(e, pizzatopping, props.requestItem )}>
                                                            <RemoveIcon/> Quitar
                                                        </IconButton>
                                                    </CardActions>
                                                            </Card>
                                                    <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        sx={{ mt: 3, mb: 2, ml: 1, bgcolor : "#008C45", width: "50%" }}
                                                        >
                                                        Agregar al carrito
                                                    </Button>
                                                </Grid>
                                            </Box>
                                        
                                )}  )   }
                            </div>
                    <div className='containerSides'>
                        <Typography variant='h3' sx={{fontWeight:'bold', m:2} }> Historial de Pedidos </Typography>
                    </div>
                </div>           

            </ThemeProvider>
        </div>
    )
}

export default Order