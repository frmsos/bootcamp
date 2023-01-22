const Joke = require("../models/joke.model");

module.exports = {
  findAllJokes : (req, res) => {
    console.log('miausa');
    Joke.find()
      .then(allJokes => res.json( {jokes : allJokes} ))
      .catch(err => res.json({ message: "Error in find all jokes", error: err }))
  },
  findOneJoke : (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
      .catch(err => res.json({ message: "Error in find one joke", error: err }));
  },
  createNewJoke : (req, res) => {
    Joke.create(req.body)
      .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
      .catch(err => res.json({ message: "Error in creating a new joke", error: err }));
  },
  updateExistingJoke : (req, res) => {
    Joke.updateOne({ _id: req.params.id }, req.body)
      .then(updatedJoke => res.json({ joke: updatedJoke }))
      .catch(err => res.json({ message: "Error updating the joke", error: err }));
  },
  deleteJoke : (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Error deleting the joke", error: err }));
  },
  random : (req, res) => {
    Joke.estimatedDocumentCount()
    .then(count => (
        Joke.findOne().skip(Math.floor(Math.random() * count))   //ref: https://stackoverflow.com/questions/39277670/how-to-find-random-record-in-mongoose
        .then( joke => res.json( {joke} )  )
        .catch( err => res.json (  { message: "Error in randomly selecting a joke", error: err }))
    ))
    .catch( err => res.json (  { message: "Error in reading the document count", error: err }))
  }

};














