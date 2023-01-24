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
  },
  listProducts : (request, response) => {
    console.log('list products');
    Product.find()
    .then( allProducts => response.json( { products : allProducts } ))
    .catch( error => response.json({message : "Error listing all products", error: error}  ))
  },
  listProductByID : (request, response) => {
    console.log('list product by id', request.params.id);
    Product.findOne({ _id: request.params.id })
    .then(reqProduct => response.json( {products : reqProduct }))
    .catch( error => response.json({message : "Error listing one product", error: error}  ))
  }

};
  














  