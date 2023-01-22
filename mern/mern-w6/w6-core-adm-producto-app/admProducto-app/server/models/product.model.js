//Archivo de modelos de datos del proyecto
//se utilizara un tipo de dato denominada "producto"
//que tendra un titulo, precio y descripcion

const mongoose = require("mongoose");


//se declara el schema, con el formato de datos a utilizar
const ProductSchema = new mongoose.Schema({
	title: {
        type: String,
        minlength: [4, "The product title must be at least 4 characters long!!!"]
    },
    price: {
        type: Number,
        required: true
    },
	description: {
        type: String,
        minlength: [3, "The product description must be at least 3 characters long!!!"]
    }
}); 

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;
