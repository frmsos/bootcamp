//Archivo del controlador, definimos las funciones con las cuales el backend tomara
//acciones de acuerdo a la ruta introducida del lado del frotend.

//se importa el modelo
const {Pizza, toppings} = require("../models/crust.models");

//definimos las acciones

module.exports = {
    getToppings : (request, response) => { 
        console.log('get all toppings items server');
        Pizza.find()
        .then( allPizzas => response.json( { pizzas : allPizzas } ))
        .catch( error => response.status(400).json({message : "Error getting all items", error: error}  ))
    }
    ,
    getPizzas : (request, response) => { 
        console.log('get all items server');
        Pizza.find()
        .then( allPizzas => response.json( { pizzas : allPizzas } ))
        .catch( error => response.status(400).json({message : "Error getting all items", error: error}  ))
    }
    ,
    getPizzaByID : (request, response) => {
        console.log('get pizza by id server', request.params.id);
        Pizza.findOne({ _id: request.params.id })
        .then(reqPizza => response.json( {pizza : reqPizza }))
        .catch( error => response.json({message : "Error getting pizza by ID", error: error}  ))
    },
    updatePizza : (request, response) =>{
        console.log('update pizza by id server', request.body);
        Pizza.updateOne({ _id: request.params.id }, request.body, {runValidators : true} )
        .then(updatedPizza => response.json( {pizza : updatedPizza }))
        .catch( error => response.status(400).json({message : "Error updating one pizza", error: error}  ))
    },
    deletePizza : (request, response) => {
        console.log('deleting function server', request.params.id);
        Pizza.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.status(400).json({ message: "Error deleting the pizza", error: err }));
    }
    



} //module exports