//Archivo del controlador, definimos las funciones con las cuales el backend tomara
//acciones de acuerdo a la ruta introducida del lado del frotend.

//se importa el modelo
const crusts = require("../models/crust.models");

//definimos las acciones

module.exports = {
    getCrusts : (request, response) => { 
        console.log('get all crusts items server');
        crusts.find()
        .then( allCrusts => response.json( { crusts : allCrusts } ))
        .catch( error => response.status(400).json({message : "Error getting all crusts items", error: error}  ))
    }
    ,
    getCrustsByID : (request, response) => {
        console.log('get crusts by id server', request.params.id);
        crusts.findOne({ _id: request.params.id })
        .then(reqCrusts => response.json( {crusts : reqCrusts }))
        .catch( error => response.json({message : "Error getting crusts by ID", error: error}  ))
    },


} //module exports