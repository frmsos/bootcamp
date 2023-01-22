
//Archivo de config de mongoose

//Importamos mongoose
const mongoose = require('mongoose');

//Conexion a la db
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/products',{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => console.log('Connected to mongodb Database'))
.catch( err => console.log('Error connecting to the database, please check',err));