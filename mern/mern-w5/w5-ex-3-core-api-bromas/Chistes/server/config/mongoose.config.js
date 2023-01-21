const mongoose = require('mongoose');

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/jokes').then(() => console.log('Connected to mongodb Database'))
    .catch( err => console.log('Error connecting to the database, please check',err));
