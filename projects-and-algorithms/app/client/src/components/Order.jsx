import {React, useState} from 'react';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import {Box, Paper, Grid, Autocomplete, Typography, Button, TextField, Card, CardActions, CardContent, CardMedia} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { display } from '@mui/system';
import {useForm} from 'react-hook-form';




const Order = (props) => {

    //VARIABLES DECLARATIONS
    const method = [  "Delivery" , "Carry-Out" ];
    const crust = [ "Masa fina", "Masa gruesa"];
    const size = [ "Pequeño",  "Mediano",  "Grande" ] ;
    const pizzaToppings = ["formaggio", "mozzarella", "marinara", "margherita"];
    const qty =[ "1",  "2", "3"];
    let name = "";
    const theme = createTheme();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [order, setOrder] = useState({});
    //const [typeValue, setTypeValue] = useState(method[0].label);
    //const [toppingsOrder, setToppingsOrder] = useState([]);


    //FUNCTIONS DECLARATIONS
    const onSubmit = (data) => {
        console.log('orden',data);
        console.log('type', order)
        alert('jrere');
    };

    
    return (
        <div>
            <Navbar itemCount={props.itemCount} setItemCount={props.setItemCount}/>
            <ThemeProvider theme={theme}>
                <div className='containerPage'>
                    <div className='containerSides'>
                        <Typography variant='h3' sx={{fontWeight:'bold', m:2} }> Nuevo Pedido </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    onChange = {(e, value)=> alert(value) }
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
                                                            renderInput={(params) => <TextField {...params} label="Tamaño" {...register("size", { required: true })}
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
                                                    <Button size="small">Quitar</Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                        
                                )}  )   }
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, ml: 1, bgcolor : "#008C45", width: "50%" }}
                                    >
                                    Checkout
                                </Button>
                                </Box>
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