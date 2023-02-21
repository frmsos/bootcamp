import {useEffect, useState} from 'react';
import {Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



export default function GridMenu(props) {
    //VARIABLES DEFINITIONS
    const pizzaToppings = ["repetir","sorpresa", "formaggio", "mozzarella", "marinara", "margherita"];
    const pizzaDescription = ["Repite tus pizzas favoritas. Primero, debes iniciar sesión.", "Te sorprendemos con las recomendaciones del chef de la casa.",
                            "Deliciosa pizza de 4 quesos preseleccionados: Gorgonzola, Ricotta, Provola, Parmesano.", "Tradicional pizza con mozzarella fresa, Fiordillate y búfala.","Preparada con la receta tradicional: salsa de tomate, ajo y orégano.",
                        "Pizza con tomates y albahaca de la huerta y mozzarella de Campania."];
    let name = "";
    let [requestItem, setRequestItem] = useState([]) ;
    let showButton;
    // class pizzaTopping {
    //     constructor(pizzaID, topping, description, cost, amount){
    //         this.pizzaID = pizzaID;
    //         this.topping = topping;
    //         this.description = description;
    //         this.cost = cost;
    //         this.amount =  amount;
    //     }
    // }

    

    


    //FUNCTIONS DEFINITION
    const handleToppingSelect = (event, pizzatopping) =>{
        event.preventDefault();
        setRequestItem( prev => [...prev, pizzatopping]);
        props.setItemCount(prev=> prev + 1);
        console.log('add', props.itemCount, requestItem);
    }

    const isThere = (pizzatopping, requestItem) =>{
        //alert(pizzatopping)
        for(let i = 0; i < requestItem.length; i++)
        {
            if(requestItem[i] === pizzatopping)
                
                return true;

        }
        return false;
    }
    const handleToppingRemove = (event, pizzatopping, requestItem) =>{
        event.preventDefault();
        console.log("recibiendo...", pizzatopping, requestItem)
        const newRequestedItem = requestItem.filter(item => item !== pizzatopping );
        setRequestItem( newRequestedItem);
        props.setItemCount(prev=> prev - 1);
        console.log('removed', props.itemCount, newRequestedItem);
    }

    
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
                                        {showButton = isThere(pizzatopping, requestItem)}
                                        {!showButton ? 
                                        <IconButton size="small" onClick={ e => handleToppingSelect(e, pizzatopping )}>
                                            <AddIcon/> Agregar
                                        </IconButton>
                                        : null}
                                        {showButton ? 
                                        <IconButton size="small" onClick={ e => handleToppingRemove(e, pizzatopping, requestItem )}>
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