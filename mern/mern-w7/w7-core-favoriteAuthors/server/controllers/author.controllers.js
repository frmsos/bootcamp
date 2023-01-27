//Archivo del controlador, definimos las funciones con las cuales el backend tomara
//acciones de acuerdo a la ruta introducida del lado del frotend.

//se importa el modelo
const Author = require("../models/author.models");

//definimos las acciones

module.exports = {
    createAuthor : (request, response) => {
        console.log('create author server',request.body);
        Author.create(request.body)
        .then(newAuthor=> response.json({author : newAuthor}))
        .catch(error => 
            response.status(400).json( {message : "Error creating a new author", error: error} ));
    },
    getAuthors : (request, response) => {
        console.log('get authors server');
        Author.find()
        .then( allAuthors => response.json( { author : allAuthors } ))
        .catch( error => response.json({message : "Error getting all authors", error: error}  ))
    },
    getAuthorsByID : (request, response) => {
        console.log('edit author by id server', request.params.id);
        Author.findOne({ _id: request.params.id })
        .then(reqAuthor => response.json( {author : reqAuthor }))
        .catch( error => response.json({message : "Error getting author", error: error}  ))
    },
    updateAuthor : (request, response) =>{
        console.log('update author by id server', request.body);
        Author.updateOne({ _id: request.params.id }, request.body, {runValidators : true} )
        .then(updatedAuthor => response.json( {author : updatedAuthor }))
        .catch( error => response.status(400).json({message : "Error updating one author", error: error}  ))
    },
    deleteAuthor : (request, response) => {
        console.log('deleting function server', request.params.id);
        Author.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.status(400).json({ message: "Error deleting the author", error: err }));
    }
    



} //module exports