const mongoose = require('mongoose');
const toppingsSchema = new mongoose.Schema({
        topping: {
            type: String,
            required: [true, "Debe ingresar un nuevo tipo de tamaño"],
            minlength: [1, "El campo size del Schema Pizza no puede estar vacío"]
        },
        toppingID:{
            type: Number,
            required: [true, "Debe ingresar un size ID"],
            unique: true
        },
        unitaryCost: {
            type: Number,
            required: [true, "Debe ingresar un costo unitario del size"]
        }
    
    
    });
module.exports = mongoose.model('toppings', toppingsSchema);