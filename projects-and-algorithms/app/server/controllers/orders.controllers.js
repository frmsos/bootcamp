//Archivo del controlador, definimos las funciones con las cuales el backend tomara
//acciones de acuerdo a la ruta introducida del lado del frotend.

//se importa el modelo
const orders = require("../models/order.models");

//definimos las acciones

module.exports = {
    getOrderbyUserID : async (req, res)=>{
        console.log('get user by id server', req.params.userid);
        const orderHistory = await orders.find({ userID: req.params.userid })
        try{
            res.status(201).json( {orderHistory : orderHistory })
        }
        catch(error){
            res.status(400).json({error: error})
        }
        
    },
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