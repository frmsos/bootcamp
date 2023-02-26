const mongoose = require('mongoose');
const crustsSchema = new mongoose.Schema({
    crust: {
            type: String,
            required: [true, "Debe ingresar un nuevo tipo de crust"],
            minlength: [1, "El campo crust del Schema Pizza no puede estar vacío"]
        },
        crustID:{
            type: Number,
            required: [true, "Debe ingresar un crust ID"],
            unique: true
        }
    });
module.exports = mongoose.model('crusts', crustsSchema);