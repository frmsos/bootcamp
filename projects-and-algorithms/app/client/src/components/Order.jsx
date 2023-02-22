import {React, useState} from 'react';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import {Box, Paper, Grid, Autocomplete, Typography, Button, TextField, Card, CardActions, CardContent, CardMedia} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { display } from '@mui/system';
import {useForm} from 'react-hook-form';




const Order = (props) => {

    //VARIABLES DECLARATIONS
    const method = [ {label: "Delivery"}, {label: "Carry-Out"} ];
    const crust = [ {label: "Masa fina"}, {label: "Masa gruesa"} ];
    const size = [ {label: "Pequeño"}, {label: "Mediano"}, {label: "Grande"} ];
    const pizzaToppings = ["formaggio", "mozzarella", "marinara", "margherita"];
    const qty =[ {label :"1"}, {label: "2"}, {label: "3"}];
    let name = "";
    const theme = createTheme();
    const {order, handleSubmit, formState: {errors}} = useForm();


    //FUNCTIONS DECLARATIONS
    const onSubmit = (data) => {
        console.log(data);
    };


    

    
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
                            options={method}
                            sx={{ width: 300, p: 2 }}
                            renderInput={(params) => <TextField {...params} label="Tipo de Orden" />}
                            
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
                                                    sx={{ width: 140, p: 2 }}
                                                    renderInput={(params) => <TextField {...params} label="Tamaño" />}
                                                />
                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={crust}
                                                    sx={{ width: 140, p: 2 }}
                                                    renderInput={(params) => <TextField {...params} label="Masa" />}
                                                />
                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={qty}
                                                    sx={{ width: 140, p: 2 }}
                                                    renderInput={(params) => <TextField {...params} label="Cantidad" />}
                                                />
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Quitar</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                        )}  )   }
                    </div>
                    <div className='containerSides'>
                        <Typography variant='h3' sx={{fontWeight:'bold', m:2} }> Historial de Pedidos </Typography>
                    </div>
                    <div className='containerSides'>
                        <Typography variant='h3' sx={{fontWeight:'bold', m:2 } }> Resumen del Pedido </Typography>
                        <Typography variant='h5' sx={{fontWeight:'bold', m:2}} style={{display: 'inline-block'}} > Tipo: </Typography>
                        <Typography variant='h5' sx={{ m:2}} style={{display: 'inline-block'}}> Tipfsfesfo: </Typography>
                    </div>
                </div>           

            </ThemeProvider>
        </div>
    )
}

export default Order