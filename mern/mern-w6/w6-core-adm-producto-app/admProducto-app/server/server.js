//Archivo del server


const express = require("express");
const app = express();
const cors = require("cors");

//importamos mongoose para conectarnos a la db
require("./config/mongoose.config");

//middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// importamos las rutas necesarias
const AllMyRoutes = require("./routes/product.routes");
AllMyRoutes(app);

app.listen(8000, () => console.log("Server running at port 8000"));