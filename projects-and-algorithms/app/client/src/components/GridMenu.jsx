import {useEffect, useState} from 'react';
import {Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



export default function GridMenu(props) {
    //VARIABLES DEFINITIONS
    const pizzaToppings = ["ferrara","rucula", "formaggio", "mozzarella", "marinara", "margherita", "marzano"];
    const pizzaDescription = ["Preparada con salsa de tomates, mozzarella, queso azul, ajo y romero.", "Con rucula fresca de la huerta acompañada con queso fiordillate, mozzarela y salsa de marinara.",
                            "Deliciosa pizza de 4 quesos preseleccionados: Gorgonzola, Ricotta, Provola, Parmesano.", "Tradicional pizza con mozzarella fresa, Fiordillate y búfala.","Preparada con la receta tradicional: salsa de tomate, ajo y orégano.",
                        "Pizza con tomates y albahaca de la huerta y mozzarella de Campania.", "Mozzarella fresca, tomates cherry de la huerta, parmesano y aceite de oliva."];
    let name = "";
    let showButton;
    let prevreqItem=[];


    //FUNCTIONS DEFINITION
    //se encarga de actualizar el vector de items pedidos y el contador del carrito.
//se llama al presionar el boton de agregar
    const handleToppingSelect = async(event, pizzatopping) =>{
        prevreqItem = await JSON.parse(window.localStorage.getItem('requestItem'));
        const prevCount = props.itemCount +1;
        prevreqItem.push(pizzatopping);
        event.preventDefault();
        props.setRequestItem( prev => [...prev, pizzatopping]);
        await props.setItemCount(prev=> prev + 1);
        console.log('add', props.itemCount, props.requestItem, prevreqItem);
        await window.localStorage.setItem('itemCount', JSON.stringify(prevCount))
        await window.localStorage.setItem('requestItem', JSON.stringify(prevreqItem))
    }
    
//funcion utilizada para validar si un elemento ya se encuentra en el vector de items solicitados
//segun el caso debe mostrarse el boton de agregar o quitar.
    const isThere = (pizzatopping, requestItem) =>{
        //alert(pizzatopping)
        for(let i = 0; i < requestItem.length; i++)
        {
            if(requestItem[i] === pizzatopping)
                
                return true;

        }
        return false;
    }
    //funcion que se llama al presionar el boton de quitar, se encarga de remover el item del vector de items y actualizar el contador del carrito
    const handleToppingRemove = async(event, pizzatopping, requestItem) =>{
        event.preventDefault();
        console.log("recibiendo...", pizzatopping, requestItem)
        const newRequestedItem = requestItem.filter(item => item !== pizzatopping );
        props.setRequestItem( newRequestedItem);
        const prevCount = props.itemCount  - 1;
        props.setItemCount(prev=> prev - 1);
        console.log('removed', props.itemCount, newRequestedItem);
        await window.localStorage.setItem('itemCount', JSON.stringify(prevCount))
    }

    console.log('print fron storage',JSON.parse(window.localStorage.getItem('xxxx')));
    
    //JSX BEGINS
    return (
        <div className='GridMenuContainer'> 
            
            <Grid container spacing={2}>
                
                    {  pizzaToppings.map(  (pizzatopping,index) => {
                        name = pizzatopping.charAt(0).toUpperCase() + pizzatopping.slice(1);
                        return (
                        <Grid item xs={3} key={index}>
                            <div>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="Pizza toping"
                                        height="140"
                                        image={require(`../images/menu/${pizzatopping}.jpeg`)}                                
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {`${name}`}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {pizzaDescription[index]}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            dedfe
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {showButton = isThere(pizzatopping, props.requestItem)}
                                        {!showButton ? 
                                        <IconButton size="small" onClick={ e => handleToppingSelect(e, pizzatopping )}>
                                            <AddIcon/> Agregar
                                        </IconButton>
                                        : null}
                                        {showButton ? 
                                        <IconButton size="small" onClick={ e => handleToppingRemove(e, pizzatopping, props.requestItem )}>
                                            <RemoveIcon/> Quitar
                                    </IconButton>
                                        : null}
                                    </CardActions>
                                </Card>
                            </div>
                    </Grid>
            )}  )   }

            </Grid>
        </div>
    
    );
} //JSX ENDS