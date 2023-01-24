const productController = require("../controllers/product.controller");

module.exports = app => {
  app.get("/api/products/list", productController.listProducts);
  app.get("/api/products/:id", productController.listProductByID);
  app.post("/api/products/create", productController.createProduct);


  // app.get("/api/jokes/random", Controller.random);
  // app.get("/api/jokes/:id", Controller.findOneJoke);
  // app.put("/api/jokes/update/:id", Controller.updateExistingJoke);
  // app.post("/api/jokes/new", Controller.createNewJoke);
  // app.delete("/api/jokes/delete/:id", Controller.deleteJoke);

};