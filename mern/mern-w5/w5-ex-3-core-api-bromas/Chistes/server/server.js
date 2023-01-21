const express = require("express");
const app = express();

//importamos mongoose para conectarnos a la db
require("./config/mongoose.config");

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// importamos las rutas necesarias
const AllMyJokeRoutes = require("./routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("Server running at port 8000"));