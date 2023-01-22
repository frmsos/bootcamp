//Archivo del controlador, definimos las funciones con las cuales el backend tomara
//acciones de acuerdo a la ruta introducida del lado del frotend.

//se importa el modelo
const Product = require("../models/product.model");

//definimos las acciones

module.exports = {
  createProduct : (request, response) => {
    console.log('createProduct',request.body);
    Product.create(request.body)
      .then(newProduct => response.json({product : newProduct}))
      .catch(error => response.json( {message : "Error creating a new product", error: error} ));
  }
  














};  