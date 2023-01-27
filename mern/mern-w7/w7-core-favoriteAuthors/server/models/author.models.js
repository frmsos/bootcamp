//Archivo de modelos de datos del proyecto

const mongoose = require("mongoose");


//se declara el schema, con el formato de datos a utilizar
const AuthorSchema = new mongoose.Schema({
	name: {
        type: String,
        minlength: [3, "The Author name be at least 4 characters long!!!"],
    },
}); 

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;