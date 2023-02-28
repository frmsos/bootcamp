const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    userID:{
            type: String,
            unique: false,
            required: true
        },
    typeOrder: {
        type: String,
        required: [ true, "Debe ingresar un nuevo tipo de pedido"],
    },
    address: {
                street: {
                    type: String,
                    required: function() { return(this.typeOrder === 'Delivery'); } 
                },
                city: {
                    type: String,
                    required: function() { return(this.typeOrder === 'Delivery'); } 
                },
                state: {
                    type: String,
                    required: function() { return(this.typeOrder === 'Delivery'); } 
                },
                _id : {
                    type: String,
                    required: false,
                    unique: false
                }
        },
    items: [
        {
            amount: {
                type: Number,
                required: [true, "Debe ingresar direccion de residencia"],
            },
            crust: {
                type: String,
                required: [true, "Debe ingresar su ciudad de residencia"]
            },
            size: {
                type: String,
                required: [true, "Debe ingresar su departamento de residencia"]
            },
            topping: {
                type: String,
                required: [true, "Debe ingresar su departamento de residencia"]
            }
        }
    ]
    });
    module.exports = mongoose.model('orders', orderSchema);