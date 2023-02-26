//Archivo del controlador, definimos las funciones con las cuales el backend tomara
//acciones de acuerdo a la ruta introducida del lado del frotend.

//se importa el modelo
const sizes = require("../models/size.models");

//definimos las acciones

module.exports = {
    getSizes : (request, response) => { 
        console.log('get all sizes items server');
        sizes.find()
        .then( allSizes => response.json( { sizes : allSizes } ))
        .catch( error => response.status(400).json({message : "Error getting all sizes items", error: error}  ))
    }
    ,
    getSizesByID : (request, response) => {
        console.log('get sizes by id server', request.params.id);
        sizes.findOne({ _id: request.params.id })
        .then(reqSizes => response.json( {sizes : reqSizes }))
        .catch( error => response.json({message : "Error getting sizes by ID", error: error}  ))
    },


} //module exports