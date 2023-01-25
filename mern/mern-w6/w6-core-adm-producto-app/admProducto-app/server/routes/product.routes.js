const productController = require("../controllers/product.controller");

module.exports = app => {
  app.get("/api/products/list", productController.listProducts);
  app.get("/api/products/:id", productController.listProductByID);
  app.post("/api/products/create", productController.createProduct);
  app.put("/api/products/update/:id", productController.updateProduct);
  app.delete("/api/products/delete/:id", productController.deleteProduct);

};