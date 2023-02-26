//Archivo del controlador, definimos las funciones con las cuales el backend tomara
//acciones de acuerdo a la ruta introducida del lado del frotend.

//se importa el modelo
const toppings = require("../models/topping.models");

//definimos las acciones

module.exports = {
    getToppings : (request, response) => { 
        console.log('get all toppings items server');
        toppings.find()
        .then( allToppings => response.json( { toppings : allToppings } ))
        .catch( error => response.status(400).json({message : "Error getting all items", error: error}  ))
    }
    ,
    getToppingsByID : (request, response) => {
        console.log('get topping by id server', request.params.id);
        toppings.findOne({ _id: request.params.id })
        .then(reqTopping => response.json( {toppings : reqTopping }))
        .catch( error => response.json({message : "Error getting topping by ID", error: error}  ))
    },


} //module exports