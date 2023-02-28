//Archivo del controlador, definimos las funciones con las cuales el backend tomara
//acciones de acuerdo a la ruta introducida del lado del frotend.

//se importa el modelo
const orders = require("../models/order.models");

//definimos las acciones

module.exports = {
    // getOrder : (request, response) => { 
    //     console.log('get all crusts items server');
    //     crusts.find()
    //     .then( allCrusts => response.json( { crusts : allCrusts } ))
    //     .catch( error => response.status(400).json({message : "Error getting all crusts items", error: error}  ))
    // }
    // ,
    // getOrdersByUserID : (request, response) => {
    //     console.log('get orders by user id server', request.params.id);
    //     crusts.findOne({ userID: request.params.id })
    //     .then(reqCrusts => response.json( {crusts : reqCrusts }))
    //     .catch( error => response.json({message : "Error getting crusts by ID", error: error}  ))
    // },
    registerOrder: async (req, res) =>{
        console.log(req.body)
        try{
            const newOrder = await orders.create(req.body);
            console.log('new order', newOrder)
            res.status(201).json({successMessage:"Order registrada ", order:newOrder})
            //console.log("userto", userToken)
        }catch(error){
            res.status(401).json(error)
        }
    },


} //module exports