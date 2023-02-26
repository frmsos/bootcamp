const toppingsController = require("../controllers/toppings.controllers");
const sizesController = require("../controllers/sizes.controllers");
const crustsController = require("../controllers/crusts.controllers");
const {authenticate} = require('../config/jwt.config')
module.exports = app => {   
    app.get("/api/pizzapp/toppings/get", authenticate, toppingsController.getToppings);
    app.get("/api/pizzapp/toppings/get/:id" ,authenticate, toppingsController.getToppingsByID);
    app.get("/api/pizzapp/sizes/get", authenticate, sizesController.getSizes);
    app.get("/api/pizzapp/sizes/get/:id", authenticate, sizesController.getSizesByID);
    app.get("/api/pizzapp/crusts/get", authenticate, crustsController.getCrusts);
    app.get("/api/pizzapp/crusts/get/:id", authenticate, crustsController.getCrustsByID);

};