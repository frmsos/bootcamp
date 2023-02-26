//Archivo del server


const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const cookieParser = require('cookie-parser')

//importamos mongoose para conectarnos a la db
require("./config/mongoose.config");

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true
}))


// importamos las rutas necesarias
const UserRoutes = require("./routes/users.routes");
UserRoutes(app)
const AllMyPizzas = require("./routes/pizzas.routes");
AllMyPizzas(app);

app.listen(8000, () => console.log("Server running at port 8000"));

