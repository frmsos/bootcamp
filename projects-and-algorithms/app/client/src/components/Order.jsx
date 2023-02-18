import {React, useState} from 'react';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const method = [ {label: "Delivery"}, {label: "Carry-Out"} ];
const crust = [ {label: "Masa fina"}, {label: "Masa gruesa"} ];
const size = [ {label: "Pequeño"}, {label: "Mediano"}, {label: "Grande"} ];
const pizzaToppings = ["formaggio", "mozzarella", "marinara", "margherita"];
const qty =[ {label :"1"}, {label: "2"}, {label: "3"}];
let name = "";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));  
const theme = createTheme();



const Order = () => {
    return (
        <div>
            <Navbar/>
            <ThemeProvider theme={theme}>
                <Typography variant='h3' sx={{fontWeight:'bold', m:2} }> Nuevo Pedido </Typography>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={method}
                    sx={{ width: 300, p: 2 }}
                    renderInput={(params) => <TextField {...params} label="Tipo de Orden" />}
                />
                {  pizzaToppings.map(  (pizzatopping,index) => {
                    name = pizzatopping.charAt(0).toUpperCase() + pizzatopping.slice(1);
                    return (
                        <Grid item xs={5} key={index} spacing={3} sx={{p:2}} >
                            <Card sx={{ maxWidth: 450 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={require(`../images/menu/${pizzatopping}.jpeg`)}                                
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {`${name}`}
                                    </Typography>
                                    <Grid item xs={3} key={index} spacing={3} sx={{display : 'flex'}} >
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={size}
                                            sx={{ width: 200, p: 2 }}
                                            renderInput={(params) => <TextField {...params} label="Tamaño" />}
                                        />
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={crust}
                                            sx={{ width: 200, p: 2 }}
                                            renderInput={(params) => <TextField {...params} label="Masa" />}
                                        />
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={qty}
                                            sx={{ width: 200, p: 2 }}
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
            </ThemeProvider>
        </div>
    )
}

export default Order