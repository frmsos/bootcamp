import {React, useState} from 'react';
import {Box, Grid, Autocomplete, Typography, Button, TextField, Card, CardActions, CardContent, CardMedia, IconButton} from '@mui/material';
import {useForm} from 'react-hook-form';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { userAuth } from '../contexts/userAuth';









const OrderItems = (props) => {
    //DECLARACION DE VARIABLES

    const method_options = [  "Delivery" , "Carry-Out" ];
    const crust_options = [ "Masa fina", "Masa gruesa"];
    const size_options = [ "Pequeño",  "Mediano",  "Grande" ] ;
    const qty_options =[ "1",  "2", "3"];
    const formaggio = { Pequeño: 60000, Mediano: 70000, Grande: 80000 }
    const mozzarella = { Pequeño: 35000, Mediano: 45000, Grande: 55000 }
    const marinara = { Pequeño: 35000, Mediano: 45000, Grande: 55000 }
    const margherita = { Pequeño: 45000, Mediano: 55000, Grande: 65000 }
    const ferrara = { Pequeño: 65000, Mediano: 75000, Grande: 85000 }
    const marzano = { Pequeño: 55000, Mediano: 65000, Grande: 75000 }
    const rucula = { Pequeño: 50000, Mediano: 60000, Grande: 70000 }
    let name = "";
    const {register, handleSubmit, formState: {errors}} = useForm();
    //const [order, setOrder] = useState({typeOrder: "", items: []});
    const [opMode, setOpMode] = useState("");
    let showButton;
    const {  userID} = useContext(userAuth);

    //DECLARACION DE FUNCIONES

    // Funcion isThere: recibe el topping de pizza especifico, el vector de pedidos y el modo de operacion.
    // se encarga de verificar si el topping especifico se encuentra en el vector de pedidos y segun el modo de operacion.
    //Modos de operacion: bool (se retorna si el topping se encuentra en el vector de pedidos y boolindex: retorna si se encuentra y en que indice del vector esta)
    // retorna verdadero o falso y el indice del vector de pedidos donde se encuentra el elemento.
    // se usa para evitar pedidos veficar que no haya pedidos repetidos.

    const isThere = (pizzatopping, requestItem, operation) =>{
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

    // Funcion onSubmit: por cada elemento seleccionado del menu, despliega las opciones de tamaño, cantidad, masa
    // recibe el vector data, que es un vector que se genera con el react hook form y contiene los datos seleccionados por el usuario en los componentes textfields
    // recibe el topping especifico y un modo de operacion que puede ser para agregar o modificar la ownerDocument, segun el modo de operacion se actual el estado 'order' que contiene
    // la orden actualiza del cliente

    const onSubmit = (data, pizzatopping, operation) => {
        let modifiedVector;
        //para generar los elementos los nombres del vector de react hook form que se van generando por cada topping en el map
        const sizeData = `size_${pizzatopping}`;
        const crustData = `crust_${pizzatopping}`;
        const amountData = `amount_${pizzatopping}`;
        //el vector data contiene los elementos cargados por el user. 
        //se genera un elemento item auxiliar para extraerlos del vector de react form
        const item = {
            topping : pizzatopping,
            size : data[sizeData],
            crust: data[crustData],
            amount : data[amountData]
        }
        //si el modo de operacion es adicionar, se agrega al estado order que debe mantener la orden actualizada del cliente
        console.log('data vector is', data)
        if( operation === 'add')
        {   
            props.setOrder( {typeOrder: props.orderType, userID: userID, items: [...props.order.items, item]} );
        }
        //si el user desea modificar su orden del carrito, debe acutalizarse el estado order con la orden actualizada
        //para ella se llama a la funcion isthere que debe retornar el indice del vector order.items para reemplazarlo
        else{
            // eslint-disable-next-line
            const [isThereBool, indexFound] = isThere(pizzatopping, props.order.items, "boolIndex");
            modifiedVector = props.order.items;
            modifiedVector[indexFound] = item;
            props.setOrder({typeOrder: props.orderType, userID: userID, items: modifiedVector})
        }
        console.log('order',props.order)

    };
    //funcion que recorre el elemento errors generado por react form hook al realizar las validaciones
    //retorna true si hay errores de validacion,
    //recibe el elemento errors, el campo a validar (puede ser el tamaño, tipo de masa y cantidad) y el topping especifico
    const checkError = (errors, field ,topping) =>{
        //console.log('register', errors);
        // eslint-disable-next-line
        let errorName = `${field}_${topping}`;
        return (!!errors?.errorName)
    }
    const mostrarCostoUnitario = (topping, size) =>{
        switch(topping){
            case 'formaggio':
                return formaggio[size]
            case 'mozzarella':
                return mozzarella[size]
            case 'margherita':
                return margherita[size]
            case 'marinara':
                return marinara[size]
            case 'ferrara':
                return ferrara[size]
            case 'rucula':
                return rucula[size]
            case 'marzano':
            return marzano[size]
            default:
            return 0;
        } 
    }
    //funcion que maneja el boton de quitar, recibe el elemento event, el topping especifico y el vector de pedidos
    //debe actualizarse el vector de pedidos y el estado order, y el contador de elementos en el carrito
    const handleToppingRemove = (event, pizzatopping, requestItem) =>{
        event.preventDefault();
        const newRequestedItem = requestItem.filter(item => item !== pizzatopping );
        props.setRequestItem( newRequestedItem);
        console.log('antes', props.order.items)
        const newOrderVector = props.order.items.filter(item => item.topping !== pizzatopping);
        props.setOrder( {...props.order, items: newOrderVector} );
        console.log('despues', props.order.items)
        props.setItemCount(prev=> prev - 1);
    }




    return (
        <div>
            OrderItems
            <Typography variant='h3' sx={{fontWeight:'bold', m:2} }> Nuevo Pedido </Typography>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    onChange = {(e, value)=>  props.setOrderType(value) }
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
                                                            <Typography>
                                                                Pequeño  Gs.{mostrarCostoUnitario(pizzatopping, 'Pequeño')} || Mediano Gs. {mostrarCostoUnitario(pizzatopping, 'Mediano')} || Grande Gs. {mostrarCostoUnitario(pizzatopping, 'Grande')}
                                                            </Typography>
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={size_options}
                                                                isOptionEqualToValue = { (option, value) => option.value === value.value}
                                                                sx={{ width: 220, p: 2, display:'block' }}
                                                                renderInput={(params) => <TextField {...params} label="Tamaño" {...register(`size_${pizzatopping}`, { required: true }) }
                                                                //error={!!errors?.size}
                                                                error = {checkError(errors, 'Size', pizzatopping)}                        
                                                                helperText = { errors?.size ? "Debe elegir una de las opciones" : null }/>}
                                                            />
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={crust_options}
                                                                isOptionEqualToValue = { (option, value) => option.value === value.value}
                                                                sx={{ width: 220, p: 2, display:'block' }}
                                                                renderInput={(params) => <TextField {...params} label="Masa" {...register(`crust_${pizzatopping}`, { required: true })}
                                                                error = {checkError(errors, 'crust', pizzatopping)}                          
                                                                helperText = { errors?.crust ? "Debe elegir una de las opciones" : null }/>}
                                                            />
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={qty_options}
                                                                isOptionEqualToValue = { (option, value) => option.value === value.value}
                                                                sx={{ width: 220, p: 2, display:'block' }}
                                                                renderInput={(params) => <TextField {...params} label="Cantidad" {...register(`amount_${pizzatopping}`, { required: true })}
                                                                error = {checkError(errors, 'amount', pizzatopping)}                         
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
                                                    {showButton = isThere(pizzatopping, props.order.items, 'bool')}
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
    )
}

export default OrderItems