import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function GridMenu() {
    const pizzaToppings = ["repetir","sorpresa", "formaggio", "mozzarella", "marinara", "margherita"];
    const pizzaDescription = ["Repite tus pizzas favoritas. Primero, debes iniciar sesión.", "Te sorprendemos con las recomendacione del chef de la casa.",
                            "Deliciosa pizza de 4 quesos preseleccionados: Gorgonzola, Ricotta, Provola, Parmesano.", "Tradicional pizza con mozzarella fresa, Fiordillate y búfala.","Preparada con la receta tradicional: salsa de tomate, ajo y orégano.",
                        "Pizza con tomates y albahaca de la huerta y mozzarella de Campania."];
    let name = "";


    return (
        <div className='GridMenuContainer'>    
            <Grid container spacing={2}>
                
                    {  pizzaToppings.map(  (pizzatopping,index) => {
                        name = pizzatopping.charAt(0).toUpperCase() + pizzatopping.slice(1);
                        return (
                        <Grid item xs={3} key={index} spacing={3} >
                            <Card sx={{ maxWidth: 345 }}>
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
                                    <Typography variant="body2" color="text.secondary">
                                        {pizzaDescription[index]}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Elegir</Button>
                                </CardActions>
                            </Card>
                    </Grid>
            )}  )   }

            </Grid>
        </div>
    
    );
}